import Invoicesort from "./Invoicesort";

function MainBody({data, setModalState}) {
  return (
    <tbody>
      {data.map((invoice) => (
        <Invoicesort key={invoice._id} invoice={invoice} setModalState={setModalState}/>
      ))}
    </tbody>
  );
}

export default MainBody;
