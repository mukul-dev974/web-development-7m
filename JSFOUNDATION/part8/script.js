
//example 1

document.getElementById("changeTextButton").addEventListener("click", function () {
    let paragraph = document.getElementById("myparagraph");
    paragraph.textContent = "the paragraph is changed";
    });


    // example 2

    document.getElementById("highlightFirstCity").addEventListener("click", function(){
        let citiesList = document.getElementById("citiesList");
       citiesList.firstElementChild.classList.add("highlight");
       });

       // example 3

       document.getElementById("changeOrder").addEventListener("click", function(){
        let coffeType =  document.getElementById("coffeType");
        coffeType.textContent = "Espresso";
        coffeType.style.backgroundColor = "brown";
        coffeType.style.padding = "5px";
       });

       // example 4

       document.getElementById("addNewItem").addEventListener('click', function(){

        let newitem = document.createElement('li')
        newitem.textContent = "curd";
        document.getElementById("ShoppingList").appendChild(newitem);
       });

        // example 5

        document.getElementById("removeLastTask").addEventListener('click',function(){
            let taskList = document.getElementById("taskList");
            taskList.lastElementChild.remove();
        });


        
        // example 6

        document.getElementById("clickMeButton").addEventListener('dblclick', function(){
            alert("mukulkaushik");
        });

        // example 7

        document.getElementById("teaList").addEventListener('click', function(event){
            if (event.target && event.target.matches(".teaItem")) {
                alert("you selected: " + event.target.textContent);
            }
            
        });


        // Example 8

        document.getElementById("feedbackForm").addEventListener('submit', function(event){
            event.preventDefault();
            let feedback = document.getElementById("feedbackInput").value;
            console.log(feedback);
            let label = document.querySelector("label.feedbackInput");
            
            
            document.getElementById("feedbackdisplay").textContent = `Feedback is : ${feedback}`;
             });



    // Example 9

    document.addEventListener("DOMContentLoaded", function(){
        document.getElementById("domStatus").textContent = "DOM fully loaded";
    });


    // Example 10

    document.getElementById("toggleHighlight").addEventListener('click', function(){
        let descriptionText = document.getElementById("descriptionText");
        descriptionText.classList.toggle("highlight");
    });