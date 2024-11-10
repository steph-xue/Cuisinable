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
                <form className="selector-cuisines-form">
                    <div>
                        <input type="radio" id="african" name="african" value="african" />
                        <label htmlFor="african">African</label>
                    </div>
                </form>
            <h2 className="selector-intolerances">Select your preferred cuisine</h2>
            <button className="button">Get Recipes</button>
        </div>
        <div className="selector-bear">
            <img className="bear" src="/images/bear-chef.png" alt="bear chef" />
        </div>
    </div>
  );
}

export default Selector;