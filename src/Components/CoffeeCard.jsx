import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee,setCoffees,coffees }) => {

  const { _id,name, quantity, supplier, taste, photo } = coffee;

  const handleDelete = _id=>{
 console.log(_id)

 Swal.fire({
  title: "Do you want to delete this items?",
   icon:'info',
  showDenyButton: true,
   
  confirmButtonText: "Delete",
  denyButtonText: `Cancel`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    
    console.log('delete confim')

  fetch(`http://localhost:5000/coffee/${_id}`,{
    method:'DELETE'
  })
    .then(res =>res.json())
    .then(data=>{
      console.log(data);
      if(data.deletedCount>0){
        Swal.fire("Deleted!", "", "success");
      }
      const remaning =coffees.filter(cof=>cof._id !=_id);
      setCoffees(remaning);
    })


  }  
  
});
  }

  return (
    <div className="card card-side bg-base-100 shadow-xl p-5 bg-red-100 ">
      <figure>
        <img
          className="w-[200px] ml-5 p-4 "
          src={photo}
          alt="Movie" />
      </figure>
      <div className="flex w-full pr-3 justify-between">
        <div className="ml-5 mt-3">
        <h2 className="card-title">Name:{name}</h2>
        <p>{quantity}</p>
        <p>{supplier}</p>
        <p>{taste}</p>
        </div>

        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <button className="btn join-item"> View</button>
           <Link to={`updateCoffee/${_id}`}>
           <button className="btn join-item">Edit</button>
           </Link>
            <button 
            onClick={()=>handleDelete(_id)}
            className="btn join-item bg-red-400">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;