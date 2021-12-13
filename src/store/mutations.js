export default{
  sendData(state,payload){
    state.tableData=payload;
    console.log(state.tableData)
  }
}