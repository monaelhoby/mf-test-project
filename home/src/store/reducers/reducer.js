
export const initialState = {
    posts:   []
};

export const Reducer = (state = initialState , action) => {
    switch(action.type){
        case "GetPosts" :
            return action.payload
        case "AddPost" :
            // console.log(state.posts.concat(action.payload))
            return {...state, posts: state.posts.concat(action.payload)}
        case "DeletePost":
            const remArray = state.posts.filter(post => post.id !== action.payload)
            return {...state, posts: remArray}
        case "EditPost" :
            const editPost = state.posts.find(post => post.id == action.id)
            editPost.id = action.payload.id
            editPost.post.title = action.payload.title
            editPost.post.body = action.payload.body
            // console.log(state.posts)
            return {...state, posts: state.posts}
    }
    return state
}