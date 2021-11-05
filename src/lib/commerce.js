import Commerce from '@chec/commerce.js';

// commerce key need to setup account with andrew and partners for income. // 
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);