import { useEffect, useState } from "react"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
// import { BASE_URL } from '../globals'

const BrandyDetails = (props) => {

  let { id } = useParams()
  console.log(id)
  const [drink, setDrink] = useState("")


  useEffect(() => {
    const getDrinks = async () => {
      const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      console.log(response)

      setDrink(drinkData)
    } catch (error) {
      console.error(error)

    }
    getBrandyDetails()
    }, [id])

    return brandy ? (
        <div className="details">
\
                <p><img src={brandy.strDrinkThumb}></img></p>
                <p>{brandy.strDrink}</p>
                <p>{brandy.strMeasure1} {brandy.strbrandy1}</p>
                <p>{brandy.strMeasure2} {brandy.strbrandy2}</p>
                <p>{brandy.strMeasure3} {brandy.strbrandy3}</p>

            <h4><span>Instructions:</span><br/>{brandy.strInstructions}</h4>
            <Link to="/brandyList">Return To brandy</Link>
        </div>
    ) : <h2 className="Finding">Loading Drink...</h2>

}

