import { createSlice, current } from "@reduxjs/toolkit";

const intialUerState ={
    userList:[],
    data: [],
}

const userSlice = createSlice({
    name: "user",
    initialState: intialUerState,
    reducers: {
        addUser(state,action){
            console.log("user added",state.userList);
            state.userList=[...state.userList,action.payload.userList]
            console.log("user added",state.userList);
            // state.userList.push(action.payload.userList);

        },
        editUser(state,action){
            console.log(current(state))
            // state.userList = [...state.userList];
            let abc=[] 
            abc.push(state.userList);
            console.log(abc[0],"user edit",state.userList);
            const newItem = action.payload.userList;

            console.log(newItem.id,"user edited",state.userList);
            const newData = {
                age: newItem.age,
                fullName: newItem.fullName,
                id: newItem.id,
                occupation: newItem.occupation
            }
            let existingItem = (current(state.userList)).find((item)=>item.id === newItem.id);
            existingItem = newData;
            const newObj = current(state.userList).map((item)=>item.id === newItem.id ? existingItem :item)
            console.log("existingItem",existingItem,"====","user edited",newObj);
            state.userList = newObj;
        },
        removeuser(state,action){   
            const removedId = action.payload;
            state.userList=[...state.userList];
            console.log(removedId,"user removed",state.userList);
            state.userList.splice(state.userList.find(id=>id===removedId),1);
            // console.log("user removed",state)
        },
        getData(state,action){
            console.log("getData called with data: " );
        },
        fetchSuccess(state,action) {
            state.data = action.payload.data;
            console.log(state.data,"==success==",action)
        },
        fetchFailure(state,action) {
            console.log(state,"==failed==",action);
        }
},
})

export const userAction = userSlice.actions;

export default userSlice.reducer;