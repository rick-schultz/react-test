import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function CreatePost() {
  let history = useHistory();
  const initialValues = {
    title: '',
    postText: '',
    userName: '',
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('You must input a title'),
    postText: Yup.string().required('You must input a post'),
    username: Yup.string().min(3).max(15).required('You must input a username'),
  });
  const onSubmit = (data) => {
    axios.post('http://localhost:3001/posts', data).then((response) => {
      history.push('/');
    });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="(Ex. Title...)"
          />

          <label>Post: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="(Ex. post...)"
          />

          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. usermane...)"
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
