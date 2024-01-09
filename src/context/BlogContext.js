import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    try {
      const response = await jsonServer.get("/posts");
      dispatch({ type: "get_blogposts", payload: response.data });
      console.log("get all 200");
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, cb) => {
    try {
      const response = await jsonServer.post("/posts", {
        title,
        body: content,
        userId: 1,
      });
      console.log("created");
      cb();
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    try {
      const response = await jsonServer.delete(`/posts/${id}`);
      console.log("deleted");
      dispatch({ type: "delete_blogpost", payload: id });
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, cb) => {
    dispatch({
      type: "edit_blogpost",
      payload: {
        id,
        title,
        content,
      },
    });
    cb();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
