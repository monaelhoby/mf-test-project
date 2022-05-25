

export const fetchPosts = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "GET"
            }).then(res => res.json())
            .then(posts => {
            fetch('https://jsonplaceholder.typicode.com/comments',{
                method: "GET"
            }).then(res => res.json())
            .then((comments) => {
                const allPosts = posts.splice(0,5)
                const allComments = comments.splice(0,20)
                // console.log(allPosts, allComments)
                let arr =[];
                allPosts.forEach(post => {
                    let postComments = [];
                    let num = 0;
                    if(allComments){
                        allComments.forEach(comment => {
                        if(comment.postId === post.id){
                        postComments.push(comment)
                        num +=1;
                        }
                    })
                    return arr.push({id: post.id, post: post, num,comment:postComments})
                    }else{
                    return arr.push({id: post.id, post: post, num,comment:postComments})
                    }
                })
                // console.log(arr)
                dispatch({type: "GetPosts", payload: {posts: arr}})
            })
        })
    }
}