export default {
  sendTableData(context,payload){
    console.log(context);
    context.commit('sendData',payload)
  }
}