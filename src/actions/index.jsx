export const changeButtonClass = (buttonClass) => {
    console.log('hello I am inside the action');
    return {
        type : 'Button_Clicked',
        payload: buttonClass
    }
} 