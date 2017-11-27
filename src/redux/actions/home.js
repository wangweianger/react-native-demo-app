import { UPDATE_CART_NUMBER } from '../actionTypes'


/*
 * action 创建函数
 */
export const updateHome = (number) => {
    return { type: UPDATE_CART_NUMBER, number:number };
};