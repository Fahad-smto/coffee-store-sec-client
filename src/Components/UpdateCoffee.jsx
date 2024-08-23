import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

 

const UpdateCoffee = () => {
    const coffee =useLoaderData();
    const{_id,name,quantity,supplier,taste,category,details,photo}=coffee;

    const handleUpdateCoffee=event=>{
        event.preventDefault();
        const form =event.target;
        const name =form.name.value;
        const quantity =form.quantity.value;
        const supplier =form.supplier.value;
        const taste =form.taste.value;
        const category =form.category.value;
        const details =form.details.value;
        const photo =form.photo.value;
        const updateCoffee ={name,quantity,supplier,taste,category,details,photo}
        console.log(updateCoffee);
  
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.modifiedCount>0){
              Swal.fire({
                  title: "success!",
                  text: "Coffee Updated Successfully",
                  icon: "success"
                });
          }
        })
  
    }
      
  


    // const coffee =useLoaderData();
    // const {_id,name,quantity,supplier,taste,category,details,photo} =coffee;
    return (
        <div className="bg-[#F4F3F0] p-20 rounded-lg my-5 ">
            <h1 className="text-3xl font-extrabold text-center mb-5 ">Update a coffee</h1>
            <form onSubmit={handleUpdateCoffee}>
                 {/* name of row */}
                <div className="md:flex">
                    <div className="md:w-1/2">
                    <h1 className="m-2">Coffee name</h1>
                     <input
                        type="text"
                        name="name"
                        defaultValue={name}
                        placeholder="Enter coffee name"
                        className="input input-bordered input-accent  max-w-xs w-full" />
                    </div>
                    <div>
                    <h1 className="m-2">Quantity</h1>
                     <input
                        type="text"
                        defaultValue={quantity}
                        name="quantity"
                        placeholder="Enter coffee Quantity"
                        className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                </div>
                 {/* name of row */}
                <div className="md:flex">
                    <div className="md:w-1/2">
                    <h1 className="m-2">Supplier</h1>
                     <input
                        type="text"
                        defaultValue={supplier}
                        name="supplier"
                        placeholder=" Supplier"
                        className="input input-bordered input-accent   max-w-xs w-full" />
                    </div>
                    <div>
                    <h1 className="m-2">Taste</h1>
                     <input
                        type="text"
                        defaultValue={taste}
                        placeholder="Taste"
                        name="taste"
                        className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                </div>
                 {/* name of row */}
                <div className="md:flex">
                    <div className="md:w-1/2">
                    <h1 className="m-2">Cetegory</h1>
                     <input
                        type="text"
                        defaultValue={category}
                        placeholder="Cetegory"
                        name="category"
                        className="input input-bordered input-accent  max-w-xs w-full" />
                    </div>
                    <div>
                    <h1 className="m-2">Details</h1>
                     <input
                        type="text"
                        defaultValue={details}
                        placeholder="Details"
                        name="details"
                        className="input input-bordered input-accent w-full max-w-xs" />
                    </div>
                </div>
                 {/* name of row */}
                <div className="">
                    <div className="">
                    <h1 className="m-2">Photo URL</h1>
                     <input
                        type="text"
                        defaultValue={photo}
                        name="photo"
                        placeholder="Enter Photo URL"
                        className="input input-bordered input-accent w-full max-w-xs " />
                    </div>
                    
                </div>

                <input type="submit" value="Update coffee"className="btn btn-block mt-5 bg-green-400" />

            </form>
        </div>
    );
};

export default UpdateCoffee;