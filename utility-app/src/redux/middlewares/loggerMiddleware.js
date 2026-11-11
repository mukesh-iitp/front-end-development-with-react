
// three parameters - store, next, action

export const loggerMiddleware = (store) => {
    return function(next){
        return function(action){
            //stores, next, actions are accessible
            
            //log actions
            console.log("[Log]: "+action.type+ " "+ new Date().toString());
            
            //call next middleware in the pipeline
            next(action);

            //log the modified the state
            console.log(store.getState());
        }
    }
}