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
            <i className="fas fa-star text-warning display-6" onClick={() => setValue(index + 1)}></i>
          ) : (
            <i className="far fa-star text-blue display-6" onClick={() => setValue(index + 1)}></i>
          )
        )}
      </div>
      );
    };


const Rating = () => {

    const [value, setValue] = useState(0);
    const navigate = useNavigate()
    const handleRate = () => {
        toast.success("gracias por su calificacion")
        navigate("/")
    }
  return (
    
   <>
    <button type="button" className="btn btn-warning text-blue" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Califica tu compra
    </button>
    
 
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title" id="exampleModalLabel">Califica tu compra</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <Star value={value} setValue={setValue}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={handleRate} type="button" className="btn btn-primary " data-bs-dismiss="modal">Calificar</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Rating

