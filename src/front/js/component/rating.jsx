import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
const Star = (props) => {
    const { value, setValue } = props;
    
    
  
    const ratingArr = [1, 1, 1, 1, 1].fill(0, value);
  
    return (
      <div className="Rating">
        {ratingArr.map((rating, index) =>
          rating ? (
            <i className="fas fa-star h-5 text-yellow-300" onClick={() => setValue(index + 1)}></i>
          ) : (
            <i className="far fa-star w-5 h-5 text-yellow-300" onClick={() => setValue(index + 1)}></i>
            
          )
          
        )}
          <span class="bg-white-100 text-neutral-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-neutral-200 dark:text-neutral-800 ml-3">5.0</span>
      </div>
      );
    };






    


const Rating = () => {

    const [value, setValue] = useState(0);
    const navigate = useNavigate()
    const handleRate = () => {
        toast.success("Gracias por su calificación")
        navigate("/")
    }
  return (
    
   <>

 
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
         
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <Star value={value} setValue={setValue}/>
          </div>
        
        </div>
      </div>
    </div>
    </>
  )
}

export default Rating

