

const filter = function(order, oldOrder, profiles, location, bio){
        var orderList = []
        var estadoAnterior = oldOrder

        function compare(elemento1, elemento2){

            const since1 = elemento1.since;
            const since2 = elemento2.since;

            let result = 0;

            if(order ==="2"){

                if(since1>since2){
                    result = 1
                }else{
                    result=-1
                }

            }else{
                if(since1<since2){
                    result = 1
                }else{
                    result=-1
                }
            }

            return result
        }

        orderList = profiles.sort(compare)

        var total = [] 

        if(location){   
            orderList.map(elemento => {
                if(elemento.location === location){
                    return total.push(elemento)
                }
            })
        }else{
            total = orderList
        }


        var filtered = []
        if(bio){
            
            total.map(elemento =>{
                if(elemento.bio){
                    return filtered.push(elemento)
                }
            })
        }else{
            filtered = total
        }

        return filtered
}

export default filter;