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
                    <div class="radio-box selector-container">
                        <div>
                            <input type="radio" className="btn-check" id="american" name="cuisine-answer" value="american" />
                            <label className="btn btn-select-cuisine" htmlFor="american">American</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="caribbean" name="cuisine-answer" value="caribbean" />
                            <label className="btn btn-select-cuisine" htmlFor="caribbean">Caribbean</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="chinese" name="cuisine-answer" value="chinese" />
                            <label className="btn btn-select-cuisine" htmlFor="chinese">Chinese</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="eastern-european" name="cuisine-answer" value="eastern-european" />
                            <label className="btn btn-select-cuisine" htmlFor="eastern-european">Eastern European</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="french" name="cuisine-answer" value="french" />
                            <label className="btn btn-select-cuisine" htmlFor="french">French</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="german" name="cuisine-answer" value="german" />
                            <label className="btn btn-select-cuisine" htmlFor="german">German</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="greek" name="cuisine-answer" value="greek" />
                            <label className="btn btn-select-cuisine" htmlFor="greek">Greek</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="indian" name="cuisine-answer" value="indian" />
                            <label className="btn btn-select-cuisine" htmlFor="indian">Indian</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="italian" name="cuisine-answer" value="italian" />
                            <label className="btn btn-select-cuisine" htmlFor="italian">Italian</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="japanese" name="cuisine-answer" value="japanese" />
                            <label className="btn btn-select-cuisine" htmlFor="japanese">Japanese</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="jewish" name="cuisine-answer" value="jewish" />
                            <label className="btn btn-select-cuisine" htmlFor="jewish">Jewish</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="korean" name="cuisine-answer" value="korean" />
                            <label className="btn btn-select-cuisine" htmlFor="korean">Korean</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="latin-american" name="cuisine-answer" value="latin-american" />
                            <label className="btn btn-select-cuisine" htmlFor="latin-american">Latin American</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="mediterranean" name="cuisine-answer" value="mediterranean" />
                            <label className="btn btn-select-cuisine" htmlFor="mediterranean">Mediterranean</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="mexican" name="cuisine-answer" value="mexican" />
                            <label className="btn btn-select-cuisine" htmlFor="mexican">Mexican</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="middle-eastern" name="cuisine-answer" value="middle-eastern" />
                            <label className="btn btn-select-cuisine" htmlFor="middle-eastern">Middle Eastern</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="spanish" name="cuisine-answer" value="spanish" />
                            <label className="btn btn-select-cuisine" htmlFor="african">Spanish</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="thai" name="cuisine-answer" value="thai" />
                            <label className="btn btn-select-cuisine" htmlFor="thai">Thai</label>
                        </div>
                        <div>
                            <input type="radio" className="btn-check" id="vietnamese" name="cuisine-answer" value="vietnamese" />
                            <label className="btn btn-select-cuisine" htmlFor="vietnamese">Vietnamese</label>
                        </div>
                    </div>
                </form>
            <button className="button">Get Recipes</button>
        </div>
        <div className="selector-bear">
            <h1 className="selector-bear-title">Cuisinably</h1>
            <img className="selector-bear-image" src="/images/bear-chef.png" alt="bear chef" />
        </div>
    
    </div>
  );
}




export default Selector;

