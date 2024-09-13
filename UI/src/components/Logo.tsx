import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <StyledLogo
      onClick={() => navigate('/')}
      width="79"
      height="41"
      viewBox="0 0 79 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.4612 12.7692L51.139 5.00735C52.5436 6.4047 53.23 8.4572 51.865 10.0873C51.4494 10.5837 48.8663 11.4579 49.1913 12.0212C49.4516 12.4724 50.218 12.2692 50.6384 12.154C51.8265 11.8284 52.7503 11.2017 53.2768 10.229C53.9467 8.99117 54.0021 7.41011 53.46 6.13635C53.239 5.61713 52.5535 4.99253 52.5483 4.44285C52.5381 3.38132 54.0951 2.93353 53.7198 1.62036C53.3357 0.276704 51.4831 -0.302912 50.1379 0.449439C49.5754 0.764007 49.0543 1.5005 48.3024 1.43916C47.4004 1.36558 46.3706 0.796524 45.4658 0.595027C42.0872 -0.157376 36.2739 -0.722228 34.1801 2.32598C32.67 4.52429 33.368 7.24113 34.9692 9.24109C35.4184 9.80223 37.6172 11.3008 37.4227 11.928C37.1272 12.8812 35.3851 14.0282 34.6057 14.7449C32.3179 16.8491 30.0619 18.9782 27.7913 21.0955C27.2664 21.585 24.5412 23.5337 25.1234 24.2556C25.7802 25.0701 28.4538 22.5267 28.9468 22.1647C31.8387 20.0408 34.5848 17.7741 37.4566 15.632C38.1064 15.1473 39.6104 13.5223 40.5309 13.572C41.3137 13.6141 42.4811 14.5247 43.1298 14.8865C45.457 16.1843 49.2049 18.1159 47.1163 20.8133C45.2936 23.1672 42.0565 23.2241 39.1278 23.51C38.5847 23.563 37.8339 24.0882 38.6519 24.3975C39.5215 24.7262 41.0568 24.4816 41.9618 24.3526C45.4468 23.8561 49.5699 21.9311 48.9343 18.4142C48.4808 15.9044 43.9244 13.7545 41.4612 12.7692ZM47.8018 2.46711C45.9157 4.73208 43.333 6.77615 41.1132 8.81771C40.5603 9.32619 39.5215 10.7558 38.6246 10.7648C37.8652 10.7724 37.0673 9.81939 36.6363 9.38167C34.9567 7.67581 33.8234 5.17026 35.12 3.03161C37.1082 -0.247861 44.8149 0.998194 47.8018 2.46711ZM51.3059 3.45498L51.139 3.31385C51.7397 0.638267 47.5128 4.70448 50.3047 3.87835C50.3256 5.06009 47.7684 6.34633 46.8007 7.11921C44.6217 8.85954 42.3246 10.4943 40.1263 12.2172C38.5128 13.4819 36.8617 15.0823 34.9537 16.0151C38.2844 12.0123 42.9463 8.25306 46.9658 4.7251C48.033 3.78838 49.6841 1.34484 51.3058 1.16682C53.3026 0.947605 52.4363 3.00505 51.3059 3.45498ZM9.09065 27.3705C7.00037 27.5252 4.99928 27.4489 2.91689 27.4462C2.05414 27.445 0.967773 27.3615 0.300188 27.9287C-0.747517 28.8187 1.26698 29.7687 1.47863 30.692C1.92476 32.6383 1.94632 35.6956 1.29438 37.6071C0.984945 38.5145 -0.908098 39.4444 0.590643 40.2877C2.09421 41.1337 4.41222 40.8075 6.0872 40.7084C6.79256 40.6666 7.91083 40.5575 8.13752 39.8589C8.23613 39.555 8.06447 39.2778 7.85273 39.0423C7.39297 38.5311 5.55181 35.1674 7.59613 35.2415C9.21621 35.3003 9.41172 37.6375 9.79246 38.595C10.5353 40.4634 12.363 41.1591 14.597 40.97C15.5195 40.892 17.8067 40.5091 17.3024 39.3159C17.0611 38.7451 16.1885 38.5956 15.8739 38.0279C15.3931 37.16 15.5914 36.1493 14.8608 35.3513C14.4675 34.9217 13.0019 34.449 12.8921 33.9502C12.7872 33.4737 14.4508 32.4435 14.6638 31.821C15.6656 28.8934 12.1456 27.1444 9.09065 27.3705ZM47.1344 27.6599C45.6117 27.9239 42.7355 29.7427 45.6333 30.4608C46.426 30.6573 47.3465 30.5152 48.1356 30.3689C49.2271 30.1666 51.5389 29.0579 50.0871 27.9617C49.3833 27.4302 47.9958 27.5106 47.1344 27.6599ZM58.6477 32.2444C58.6477 31.35 59.4347 28.327 58.547 27.7323C57.3647 26.9404 52.3426 28.2131 52.2313 29.5626C52.1627 30.395 53.5917 30.7125 53.7706 31.5389C54.1309 33.2022 53.9985 35.5099 53.7379 37.1838C53.6543 37.7207 53.1309 39.1871 53.4946 39.6388C53.904 40.1472 55.2059 39.6985 55.8111 39.8811C59.3568 40.951 63.3235 41.5467 65.5993 38.1716C67.1224 35.9128 66.8468 31.7821 63.1528 31.1815C61.3457 30.8876 60.1271 31.4729 58.6477 32.2444ZM7.44434 29.4964C9.50698 29.1217 9.75869 32.7757 7.75628 33.0583C5.99629 33.3066 6.41217 29.6839 7.44434 29.4964ZM22.6062 36.337C24.1419 36.337 27.2437 36.8403 28.5774 36.1706C31.111 34.8986 27.4684 31.7887 25.9434 31.3338C19.4873 29.408 14.0586 37.509 20.6039 40.2694C22.6247 41.1217 25.1465 41.0618 27.1114 40.1227C27.9209 39.7359 29.0711 38.9524 28.6535 38.0388C28.2135 37.076 26.9992 37.8031 26.2771 38.0408C24.7181 38.5541 22.7413 37.8525 22.6062 36.337ZM31.6166 31.1758C30.9056 31.2622 29.5092 31.3604 29.3434 32.1174C29.1772 32.8763 30.5562 33.2974 31.0277 33.7989C32.1972 35.043 32.9829 36.7539 33.827 38.1716C34.3406 39.0343 35.2094 40.8898 36.6223 40.8054C37.6229 40.7456 38.1656 39.801 38.5995 39.1595C39.8083 37.3726 40.6562 35.3714 42.0025 33.6563C42.446 33.0912 44.6934 32.3037 43.7107 31.5217C42.9225 30.8944 39.1568 30.757 38.78 31.8512C38.573 32.4525 40.0769 34.8966 37.9531 34.8966C35.6916 34.8966 37.6194 32.266 37.1585 31.739C36.2715 30.7246 32.8963 31.0204 31.6166 31.1758ZM49.1367 31.1775C47.8491 31.3401 45.2177 31.605 44.3993 32.5568C43.7457 33.3169 44.8959 33.6933 45.2692 34.2462C45.5726 34.6954 45.5998 35.406 45.6261 35.9136C45.6645 36.6545 45.6795 37.4759 45.3233 38.1696C45.0428 38.7158 44.2771 39.0701 44.3323 39.7224C44.4656 41.2958 49.099 40.8574 50.3047 40.666C50.9208 40.5682 51.7594 40.3184 51.8828 39.7184C52.041 38.9492 50.8181 38.3787 50.6741 37.6071C50.397 36.122 50.6384 34.4533 50.6384 32.95C50.6384 31.9229 50.694 30.9807 49.1367 31.1775ZM72.1632 36.337C73.6978 36.337 76.8099 36.8431 78.1478 36.192C80.4356 35.0786 77.5435 32.1245 76.1678 31.5581C69.8756 28.968 63.511 36.7777 69.8272 40.0813C71.7799 41.1026 74.4819 41.1203 76.5015 40.2189C77.3889 39.8229 78.6903 39.0393 78.2125 38.0388C77.7339 37.0367 76.4359 37.8844 75.6672 38.0977C74.1223 38.5264 72.3495 37.752 72.1632 36.337ZM23.6098 32.8723C24.7754 32.7143 25.5399 34.2982 24.265 34.4815C22.4979 34.7355 21.8028 33.1171 23.6098 32.8723ZM73.1649 32.8778C74.2231 32.6968 75.2055 34.1635 73.9803 34.4575C72.249 34.873 71.2997 33.1969 73.1649 32.8778ZM59.6519 34.0258C61.9446 33.7529 62.3815 38.9657 59.9832 39.1119C58.2583 39.2171 57.9416 34.2294 59.6519 34.0258Z"
        fill="#F15822"
      />
    </StyledLogo>
  );
};

const StyledLogo = styled.svg`
  height: 5rem;
  width: 5rem;
  cursor: pointer;
`;

export default Logo;