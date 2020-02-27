
class DataRoute{
    constructor(baseRouter,service){
        this.router = baseRouter; 
        this.service = service;
        this.start();
    }

    
    start(){
        this.router.get('/',
            async (req,res,next)=>{
                if(req.query.deviceID){
                    console.log(req.baseUrl)
                    res.redirect("./"+req.baseUrl+'/'+req.query.deviceID);
                }
                await this.service.get()
                .then((message)=>{
                    // console.log(message);
                    return res.render("json",{data:message});                    
                }).catch(next);   
            }
        );
        this.router.get('/:deviceID',
            async (req,res,next)=>{
                console.log("/:deviceID called")
                await this.service.getDevice(req.params.deviceID)
                .then((message)=>{
                    return res.render("graph",{device:req.params.deviceID,data:message});                    
                }).catch(next);    
                return ;    
            }
        );
        this.router.post('/',
            async (req,res,next)=>{
                const device = req.body.device;
                const rawdata = req.body.data;
                const time = req.body.time;

                await this.service.post(device,rawdata,time)
                .then((message)=>{
                    return res.render("default",{message:"posting success"});
                }).catch(next)
                return ;
            }
        );
    }
}

module.exports.DataRoute = DataRoute;