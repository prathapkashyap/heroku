//testing whether the comments api works or not
const axios=require('axios')
var url='http://localhost:4000/api/user/comment/handler'
axios.get(url).then((res)=>{
    console.log(res.data.comments)
});

