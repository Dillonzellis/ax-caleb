import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
  putRequest,
} from './api/utils';

const App = () => {
  return (
    <div className='bg-slate-700 h-screen flex flex-col gap-8 justify-center items-center text-white'>
      <div className='text-white'>App</div>
      <div className='flex flex-col gap-2'>
        <button className='border p-2' onClick={() => getRequest(2)}>
          GET
        </button>
        <button className='border p-2' onClick={postRequest}>
          POST
        </button>
        <button className='border p-2' onClick={() => putRequest(1)}>
          PUT
        </button>
        <button className='border p-2' onClick={() => patchRequest(1)}>
          PATCH
        </button>
        <button className='border p-2' onClick={() => deleteRequest(1)}>
          DELETE
        </button>
        <button
          className='border p-2'
          onClick={() => console.log('Sim Requests')}>
          Sim Requests
        </button>
        <button
          className='border p-2'
          onClick={() => console.log('Custom Headers')}>
          Custom Headers
        </button>
        <button className='border p-2' onClick={() => console.log('Transform')}>
          Transform
        </button>
        <button
          className='border p-2'
          onClick={() => console.log('Error Handling')}>
          Error Handling
        </button>
        <button className='border p-2' onClick={() => console.log('Cancel')}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default App;
