class CommonController {
   public static getResponse (status: number) {
       switch(status) {
           case 200:
                return { status, msg: 'Request Success' }
            case 400:
                return { status, msg: 'Check Parameter' }
            case 500:
                return { status, msg: 'Server Error' }
       }
   } 
}

export default CommonController