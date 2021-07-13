import React from "react";

interface Props {
  currentColor: string;
}

const Twitter: React.FC<Props> = ({ currentColor }) => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.375 0C1.96289 0 0 1.96289 0 4.375V28.125C0 30.5371 1.96289 32.5 4.375 32.5H28.125C30.5371 32.5 32.5 30.5371 32.5 28.125V4.375C32.5 1.96289 30.5371 0 28.125 0H4.375ZM4.375 1.25H28.125C29.8486 1.25 31.25 2.65137 31.25 4.375V28.125C31.25 29.8486 29.8486 31.25 28.125 31.25H4.375C2.65137 31.25 1.25 29.8486 1.25 28.125V4.375C1.25 2.65137 2.65137 1.25 4.375 1.25ZM3.75 3.75C3.40576 3.75 3.125 4.02832 3.125 4.375V5.625C3.125 5.97168 3.40576 6.25 3.75 6.25C4.09424 6.25 4.375 5.97168 4.375 5.625V4.375C4.375 4.02832 4.09424 3.75 3.75 3.75ZM6.875 3.75C6.53076 3.75 6.25 4.02832 6.25 4.375V5.625C6.25 5.97168 6.53076 6.25 6.875 6.25C7.21924 6.25 7.5 5.97168 7.5 5.625V4.375C7.5 4.02832 7.21924 3.75 6.875 3.75ZM10 3.75C9.65576 3.75 9.375 4.02832 9.375 4.375V5.625C9.375 5.97168 9.65576 6.25 10 6.25C10.3442 6.25 10.625 5.97168 10.625 5.625V4.375C10.625 4.02832 10.3442 3.75 10 3.75ZM13.125 3.75C12.7808 3.75 12.5 4.02832 12.5 4.375V5.625C12.5 5.97168 12.7808 6.25 13.125 6.25C13.4692 6.25 13.75 5.97168 13.75 5.625V4.375C13.75 4.02832 13.4692 3.75 13.125 3.75ZM16.25 3.75C15.9058 3.75 15.625 4.02832 15.625 4.375V5.625C15.625 5.97168 15.9058 6.25 16.25 6.25C16.5942 6.25 16.875 5.97168 16.875 5.625V4.375C16.875 4.02832 16.5942 3.75 16.25 3.75ZM19.375 3.75C19.0308 3.75 18.75 4.02832 18.75 4.375V5.625C18.75 5.97168 19.0308 6.25 19.375 6.25C19.7192 6.25 20 5.97168 20 5.625V4.375C20 4.02832 19.7192 3.75 19.375 3.75ZM22.5 3.75C22.1558 3.75 21.875 4.02832 21.875 4.375V5.625C21.875 5.97168 22.1558 6.25 22.5 6.25C22.8442 6.25 23.125 5.97168 23.125 5.625V4.375C23.125 4.02832 22.8442 3.75 22.5 3.75ZM25.625 3.75C25.2808 3.75 25 4.02832 25 4.375V5.625C25 5.97168 25.2808 6.25 25.625 6.25C25.9692 6.25 26.25 5.97168 26.25 5.625V4.375C26.25 4.02832 25.9692 3.75 25.625 3.75ZM28.75 3.75C28.4058 3.75 28.125 4.02832 28.125 4.375V5.625C28.125 5.97168 28.4058 6.25 28.75 6.25C29.0942 6.25 29.375 5.97168 29.375 5.625V4.375C29.375 4.02832 29.0942 3.75 28.75 3.75ZM20.9082 9.24805C18.2178 9.24805 16.0278 11.4355 16.0278 14.126C16.0278 14.2554 16.0327 14.3848 16.0425 14.5117C12.981 14.1797 10.1465 12.6489 8.18604 10.2417C8.07373 10.1025 7.89795 10.0269 7.71729 10.0391C7.53906 10.0537 7.37793 10.1562 7.2876 10.3125C6.85547 11.0547 6.62598 11.9019 6.62598 12.7637C6.62598 13.6816 6.88232 14.563 7.34619 15.3223C7.18994 15.2563 7.01416 15.2686 6.86523 15.354C6.69922 15.4492 6.59424 15.6274 6.5918 15.8203V15.8813C6.5918 17.4072 7.30469 18.7988 8.4375 19.7021C8.36426 19.7339 8.30078 19.7803 8.24707 19.8413C8.12012 19.9854 8.07617 20.188 8.13477 20.3711C8.62061 21.8848 9.79736 23.0347 11.2524 23.5156C10.0586 24.1724 8.7207 24.5166 7.32422 24.5166C6.99219 24.5166 6.66748 24.4971 6.35742 24.4604C6.10107 24.4287 5.86182 24.5776 5.77393 24.8193C5.68848 25.061 5.78125 25.3271 5.99609 25.4663C8.06885 26.7969 10.4663 27.5 12.9297 27.5C17.771 27.5 20.8008 25.2148 22.4902 23.2983C24.5947 20.9106 25.8008 17.7515 25.8008 14.6289C25.8008 14.5312 25.8008 14.4336 25.7983 14.3359C26.5991 13.7207 27.2925 12.9785 27.8589 12.1289C27.9956 11.9287 27.981 11.6602 27.8223 11.4746C27.666 11.2866 27.4023 11.2256 27.1802 11.3257C27.0386 11.3867 26.897 11.4453 26.7505 11.5015C27.002 11.1255 27.2021 10.7129 27.3413 10.2783C27.4097 10.061 27.3389 9.82422 27.1606 9.68262C26.9824 9.54102 26.7358 9.52393 26.5405 9.63867C25.8252 10.0659 25.0537 10.3735 24.2456 10.564C23.3447 9.72168 22.146 9.24805 20.9082 9.24805ZM20.9082 10.3442C21.9507 10.3442 22.9565 10.7788 23.6694 11.5405C23.7988 11.6772 23.9893 11.7383 24.1772 11.7017C24.624 11.6138 25.061 11.4917 25.4883 11.3403C25.2417 11.6113 24.9536 11.8457 24.6338 12.0386C24.4116 12.1704 24.314 12.4414 24.397 12.6855C24.48 12.9297 24.7241 13.0835 24.9805 13.0542C25.2441 13.02 25.5054 12.9785 25.7642 12.9248C25.498 13.1763 25.2173 13.4082 24.9194 13.623C24.7705 13.7305 24.6851 13.9062 24.6924 14.0918C24.6997 14.27 24.707 14.4482 24.707 14.6289C24.707 21.9995 18.7183 26.4038 12.9297 26.4038C11.4038 26.4038 9.90479 26.1084 8.50586 25.5396C10.1611 25.332 11.709 24.6875 13.0396 23.6426C13.2227 23.501 13.2959 23.2593 13.2227 23.0371C13.1494 22.8174 12.9443 22.6685 12.7148 22.6636C11.3892 22.6392 10.2002 21.9287 9.53857 20.8301C9.95117 20.8228 10.3589 20.7666 10.7568 20.6592C11.0034 20.5933 11.1694 20.3662 11.1621 20.1123C11.1523 19.8584 10.9692 19.6411 10.7202 19.5923C9.24561 19.2944 8.10791 18.1494 7.7832 16.6992C8.20312 16.8311 8.64258 16.9043 9.08203 16.9165C9.32861 16.936 9.54834 16.77 9.62158 16.5381C9.69727 16.3062 9.60938 16.0522 9.4043 15.9155C8.35205 15.21 7.72217 14.0332 7.72217 12.7661C7.72217 12.3657 7.78564 11.9678 7.90771 11.5918C10.1807 14.0234 13.3228 15.4932 16.6602 15.6616C16.8384 15.6714 16.9971 15.5981 17.1094 15.4663C17.2192 15.3345 17.2607 15.1587 17.2241 14.9902C17.1582 14.7095 17.124 14.4189 17.124 14.1284C17.124 12.041 18.8208 10.3442 20.9082 10.3442Z"
        fill={currentColor}
      />
    </svg>
  );
};

export default Twitter;