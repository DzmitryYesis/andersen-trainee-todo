import { Dispatch } from 'redux';

import { addTodolistAC, AllAppActionType } from 'store/actions';

export const addTodolistTC =
  (title: string) => (dispatch: Dispatch<AllAppActionType>) => {
    fetch('https://6311e8fc19eb631f9d7b7f47.mockapi.io/todosYesis', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: title }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(addTodolistAC(data));
      });
  };

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     if (!response.ok) {
//       throw new Error('Server Error');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     // return rejectWithValue(error.message);
//   }
// });
