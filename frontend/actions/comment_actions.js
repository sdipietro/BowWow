import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveAllComments = (comments) => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    }
};

const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
};

const removeComment = (commentId) => {
    return {
        type: REMOVE_COMMENT,
        commentId
    }
};

export const fetchAllComments = () => dispatch => {
    return (CommentAPIUtil.fetchAllComments()
        .then(comments => dispatch(receiveAllComments(comments)))
    );
};

export const fetchComment = (commentId) => dispatch => {
    return (CommentAPIUtil.fetchComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
    );
};

export const createComment = (comment) => dispatch => {
    return (CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
    );
};

export const updateComment = (comment) => dispatch => {
    return (CommentAPIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
    );
};

export const deleteComment = (commentId) => dispatch => {
    return (CommentAPIUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
    );
};