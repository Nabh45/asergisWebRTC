export function changeButtonClass(buttonClass) {
    console.log('action is called'+JSON.stringify(buttonClass));

    return function(dispatch) {
        dispatch({type: "Change_ButtonClass",
        payload: (buttonClass == 'primary' ? 'secondary' : 'primary')
    });
} 
}