import useNavigate from '@hooks/useNavigate'

function ReturnButton(){
    const { navigate } = useNavigate();
    
    return(
        <button 
            className="roundButton"
            onClick={() => navigate('ProjectsSection')}> 
            
            {'<'} 
        
        </button>
    )
}

export default ReturnButton