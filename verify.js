
        let source = 0;
        let ans = new Array();
        function ck(){
            let count = 0;
            for(let i=4;i<8;i++){
                let ct = document.querySelectorAll(".container")[i];
                if(ct.querySelectorAll(".test").length){
                    if(ct.querySelector(".test").innerText == ans[i-4]){
                        count++;
                    }
                }
            }
            if(count ==4){
                alert("OK");
                $("#verifyBox").hide(1000,()=>{
                    $("#schedule").show(500);
                })
            } 
        }
        function cancelDefault(e) {
            e.preventDefault()
            e.stopPropagation()
            // return false
        }

        function dropped(e) {
            let c = document.querySelectorAll(".test");
            let test = document.querySelectorAll(".test");
            // let a = e.dataTransfer.getData('text/plain')

            e.target.appendChild(c[source])
            ck()
        }

        let test = document.querySelectorAll(".test");


        for (let i = 0; i < test.length; i++) {
            test[i].addEventListener("dragstart", (e) => {
                // e.dataTransfer.setData('text/plain', e.target.className);

                let c = document.querySelectorAll(".test");
                for (let i = 0; i < c.length; i++) {
                    if (e.target == c[i])
                        source = i;
                }


            })
        }





        let container = document.querySelectorAll(".container");
        for (let i = 0; i < container.length; i++) {
            if(i>3)
                ans.push(container[i].innerText);

            container[i].addEventListener("dragenter", (e) => {
                cancelDefault(e)
            })

            container[i].addEventListener("dragover", (e) => {
                cancelDefault(e)
            })
            container[i].addEventListener("drop", (e) => {
                cancelDefault(e)
                if (e.target.className.split(" ").includes("container"))
                    dropped(e)
            })
        }