const UserPage = () => {
  return (
    <div>
      <h1>User Page</h1>
    </div>
  );
};

export function generateMetadata({params}){
    return{
        title:'User Page',
        description:"User page description"
    }
}


export default UserPage;
