import { connect } from 'react-redux'
import { addPostActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
let mapStateToProps = state => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
	}
}
let mapDispatchToProps = dispatch => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator())
		},
		updateNewPostText: text => {
			dispatch.updateNewPostActionCreator(text)
		},
	}
}

export default MyPostsContainer
