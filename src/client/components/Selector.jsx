import React from "react";

function Selector() {
  return (
    <div className="selector-page">
        <div className="selector">
            <h2 className="selector-intolerances">Select your food intolerance(s)</h2>
                <form className="selector-intolerances-form">
                    <div>
                        <input type="checkbox" id="dairy" name="dairy" value="dairy" />
                        <label htmlFor="dairy">Dairy</label>
                    </div>
                    <div>
                        <input type="checkbox" id="egg" name="egg" value="egg" />
                        <label htmlFor="egg">Egg</label>
                    </div>
                    <div>
                        <input type="checkbox" id="gluten" name="gluten" value="gluten" />
                        <label htmlFor="gluten">Gluten</label>
                    </div>
                    <div>
                        <input type="checkbox" id="grain" name="grain" value="grain" />
                        <label htmlFor="grain">Grain</label>
                    </div>
                    <div>
                        <input type="checkbox" id="peanut" name="peanut" value="peanut" />
                        <label htmlFor="peanut">Peanut</label>
                    </div>
                    <div>
                        <input type="checkbox" id="seafood" name="seafood" value="seafood" />
                        <label htmlFor="seafood">Seafood</label>
                    </div>
                    <div>
                        <input type="checkbox" id="sesame" name="sesame" value="sesame" />
                        <label htmlFor="sesame">Sesame</label>
                    </div>
                    <div>
                        <input type="checkbox" id="shellfish" name="shellfish" value="shellfish" />
                        <label htmlFor="shellfish">Shellfish</label>
                    </div>
                    <div>
                        <input type="checkbox" id="soy" name="soy" value="soy" />
                        <label htmlFor="soy">Soy</label>
                    </div>
                    <div>
                        <input type="checkbox" id="sulfite" name="sulfite" value="sulfite" />
                        <label htmlFor="sulfite">Sulfite</label>
                    </div>
                    <div>
                        <input type="checkbox" id="treenut" name="treenut" value="treenut" />
                        <label htmlFor="treenut">Tree Nut</label>
                    </div>
                    <div>
                        <input type="checkbox" id="wheat" name="wheat" value="wheat" />
                        <label htmlFor="wheat">Wheat</label>
                    </div>
                </form>
                <h2 className="selector-cuisines">Select your preferred cuisine</h2>
                <form className="selector-cuisines-form">
                    <div class="radio-box">
                        <div>
                            <input type="radio" className="btn-check" id="american" name="cuisine-answer" value="american" />
                            <label className="btn btn-secondary" htmlFor="american">American</label>
                        </div>
                        <div>
                            <input type="radio" id="caribbean" name="cuisine-answer" value="caribbean" />
                            <label htmlFor="caribbean">Caribbean</label>
                        </div>
                        <div>
                            <input type="radio" id="chinese" name="cuisine-answer" value="chinese" />
                            <label htmlFor="chinese">Chinese</label>
                        </div>
                        <div>
                            <input type="radio" id="eastern-european" name="cuisine-answer" value="eastern-european" />
                            <label htmlFor="eastern-european">Eastern European</label>
                        </div>
                        <div>
                            <input type="radio" id="french" name="cuisine-answer" value="french" />
                            <label htmlFor="french">French</label>
                        </div>
                        <div>
                            <input type="radio" id="german" name="cuisine-answer" value="german" />
                            <label htmlFor="german">German</label>
                        </div>
                        <div>
                            <input type="radio" id="greek" name="cuisine-answer" value="greek" />
                            <label htmlFor="greek">Greek</label>
                        </div>
                        <div>
                            <input type="radio" id="indian" name="cuisine-answer" value="indian" />
                            <label htmlFor="indian">Indian</label>
                        </div>
                        <div>
                            <input type="radio" id="italian" name="cuisine-answer" value="italian" />
                            <label htmlFor="italian">Italian</label>
                        </div>
                        <div>
                            <input type="radio" id="japanese" name="cuisine-answer" value="japanese" />
                            <label htmlFor="japanese">Japanese</label>
                        </div>
                        <div>
                            <input type="radio" id="jewish" name="cuisine-answer" value="jewish" />
                            <label htmlFor="jewish">Jewish</label>
                        </div>
                        <div>
                            <input type="radio" id="korean" name="cuisine-answer" value="korean" />
                            <label htmlFor="korean">Korean</label>
                        </div>
                        <div>
                            <input type="radio" id="latin-american" name="cuisine-answer" value="latin-american" />
                            <label htmlFor="latin-american">Latin American</label>
                        </div>
                        <div>
                            <input type="radio" id="mediterranean" name="cuisine-answer" value="mediterranean" />
                            <label htmlFor="mediterranean">Mediterranean</label>
                        </div>
                        <div>
                            <input type="radio" id="mexican" name="cuisine-answer" value="mexican" />
                            <label htmlFor="mexican">Mexican</label>
                        </div>
                        <div>
                            <input type="radio" id="middle-eastern" name="cuisine-answer" value="middle-eastern" />
                            <label htmlFor="middle-eastern">Middle Eastern</label>
                        </div>
                        <div>
                            <input type="radio" id="spanish" name="cuisine-answer" value="spanish" />
                            <label htmlFor="african">Spanish</label>
                        </div>
                        <div>
                            <input type="radio" id="thai" name="cuisine-answer" value="thai" />
                            <label htmlFor="thai">Thai</label>
                        </div>
                        <div>
                            <input type="radio" id="vietnamese" name="cuisine-answer" value="vietnamese" />
                            <label htmlFor="vietnamese">Vietnamese</label>
                        </div>
                    </div>
                </form>
            <button className="button">Get Recipes</button>
        </div>
        <div className="selector-bear">
            <img className="selector-bear-image" src="/images/bear-chef.png" alt="bear chef" />
        </div>
    
    </div>
  );
}




export default Selector;

