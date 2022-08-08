import { createSlice, current } from "@reduxjs/toolkit";

const intialUserState ={
    userDataList:{},
    dataList: [],
    dataCalled:false,
    isActive:'',
}

const userDataSlice = createSlice({
    name: "userDataList",
    initialState: intialUserState,
    reducers: {
        addUser(state,action){
            state.userDataList=action.payload.userDataList;
            state.isActive = "CRUDSaga";
            localStorage.setItem('isActive',"CRUDSaga" );
            console.log("user added",state.userDataList);
            // state.userDataList.push(action.payload.userDataList);

        },
        editUser(state,action){
            console.log("editUser..",current(state))
            state.isActive = "CRUDSaga";
            localStorage.setItem('isActive',"CRUDSaga" );
            // state.userDataList = [...state.userDataList];

            const newItem = action.payload.userDataList;

            console.log(newItem,"user edited",state.dataList);
            const newData = {
                email: newItem.email,
                first_name: newItem.first_name,
                id: newItem.id,
                last_name: newItem.last_name
            }
            state.userDataList= newData;
            console.log(state.userDataList,"====","user edited",newData);
            // state.userDataList = newObj;
        },
        removeuser(state,action){   
            const removedId = action.payload;
            state.isActive = "CRUDSaga";
            localStorage.setItem('isActive',"CRUDSaga" );
            console.log(removedId,"user removed",state.userDataList);
        },
        getUserData(state,action){
            console.log("getData called with dataList saga: " );
        },
        fetchSuccess(state,action) {
            state.dataList=[...state.dataList];
            state.dataList = action.payload.data;
            state.dataCalled = true;
            console.log(state.dataList,"==success userDataList==",action.payload.data)
        },
        fetchFailure(state,action) {
            console.log(state,"==failed==",action);
        }
},
})

export const userDataAction = userDataSlice.actions;

export default userDataSlice.reducer;