use diesel::prelude::*;
use domain::models::{NewProduct, Product};
use infrastructure::database::connection::establish_connection;
use rocket::{response::status::NotFound, serde::json::Json};
use shared::response_models::{Response, ResponseBody};

pub fn update_product(id: i32, new_post: Json<NewProduct>) -> Result<Product, NotFound<String>> {
    use domain::schema::products::dsl::*;

    let product_update = new_post.into_inner();

    match diesel::update(products.find(id))
        .set((
            name.eq(product_update.name),
            description.eq(product_update.description),
            price.eq(product_update.price),
            quantity.eq(product_update.quantity),
            category_id.eq(product_update.category_id),
        ))
        .get_result::<Product>(&mut establish_connection())
    {
        Ok(post) => Ok(post),
        Err(err) => match err {
            diesel::result::Error::NotFound => {
                let response = Response {
                    body: ResponseBody::Message(format!(
                        "Error updating post with id {:?} - {:?}",
                        product_id, err
                    )),
                };
                return Err(NotFound(serde_json::to_string(&response).unwrap()));
            }
            _ => {
                panic!("Database error - {}", err);
            }
        },
    }
}
