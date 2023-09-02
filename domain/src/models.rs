use argon2::{self, Config};
use chrono::NaiveDateTime;
use diesel::{Insertable, Queryable};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use crate::schema::{comments, posts, users};

// Struct for the Users table
#[derive(Queryable, Serialize, Deserialize, Debug)]
pub struct User {
    pub id: Uuid,
    pub name: String,
    pub password: String,
    pub email: String,
    pub bio: Option<String>,
    pub profile_picture_url: Option<String>,
}

// Struct for the Categories table
#[derive(Queryable, Serialize, Deserialize, Debug)]
pub struct Category {
    pub category_id: i32,
    pub name: String,
    pub description: Option<String>,
}

// Struct for the Comments table
#[derive(Queryable, Serialize, Deserialize, Debug)]
pub struct Comment {
    pub comment_id: i32,
    pub post_id: Option<i32>,
    pub author_name: String,
    pub email: String,
    pub content: String,
    pub comment_date: Option<NaiveDateTime>,
}

// Struct for the Posts table
#[derive(Queryable, Serialize, Ord, Eq, PartialEq, PartialOrd)]
pub struct Post {
    pub post_id: i32,
    pub title: String,
    pub content: String,
    pub publication_date: NaiveDateTime,
    pub author_id: Uuid,
    pub category_id: i32,
}

// Struct for the PostTags table (Associative table)
#[derive(Queryable, Serialize, Deserialize, Debug)]
pub struct PostTag {
    pub post_id: i32,
    pub tag_id: i32,
}

// Struct for the Tags table
#[derive(Queryable, Serialize, Deserialize, Debug)]
pub struct Tag {
    pub tag_id: i32,
    pub name: Option<String>,
}

#[derive(Insertable, Deserialize)]
#[serde(crate = "rocket::serde")]
#[diesel(table_name = posts)]
pub struct NewPost {
    pub title: String,
    pub content: String,
    pub publication_date: Option<NaiveDateTime>,
    pub author_id: Uuid,
    pub category_id: i32,
}

#[derive(Insertable, Deserialize)]
#[serde(crate = "rocket::serde")]
#[diesel(table_name = comments)]
pub struct NewComment {
    pub content: String,
}

#[derive(Insertable)]
#[diesel(table_name = users)]
pub struct InsertableUser {
    id: Uuid,
    name: String,
    password: String,
    email: String,
}

impl InsertableUser {
    pub fn from_user(user: User) -> InsertableUser {
        let salt = b"somesalt";
        let config = Config::default();
        let hash = argon2::hash_encoded(&user.password.as_bytes(), salt, &config).unwrap();
        InsertableUser {
            id: user.id,
            name: user.name,
            email: user.email,
            password: hash,
        }
    }
}
