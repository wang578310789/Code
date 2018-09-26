Page({
  data: {
    show:true
  },
  click(){
    if(this.data.show){
      this.setData({
        show:false
      });
    }else{
      this.setData({
        show:true
      });
    }
  }
});