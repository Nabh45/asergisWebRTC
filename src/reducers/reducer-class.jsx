export default function (state, action) {
    return {
        classButton: action.payload || 'primary'
    }
}