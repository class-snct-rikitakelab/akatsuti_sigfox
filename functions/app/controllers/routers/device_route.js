const Device = require("../../models/domain/Device").Device;

class DeviceRoute{
    constructor(baseRouter,service){
        this.router = baseRouter; 
        this.service = service
        this.start();
   }

    start(){
        this.router.get('/',
            async (req,res,next)=>{
                await this.service.get()
                .then((message)=>{
                    return res.render("device_list",{title:"デバイス一覧",data:message});                    
                }).catch(next);
                return;    
            }
        );
        this.router.get('/:deviceID',async (req,res,next)=>{
            await this.service.getDevice(req.params.deviceID)
            .then((message)=>{
                console.log(message)
                return res.render("device",{title:`${req.params.deviceID}`,data:message})
            }).catch(next);
        })
        this.router.post('/',
            async (req,res,next)=>{
                const device = req.body.device;
                const name = req.body.name;
                const admin = req.body.admin;
                await this.service.post(device,name,admin)
                .then((message)=>{
                    return res.render("default",{message:message});
                }).catch(next)
                return ;
            }
        );
    }
}

module.exports.DeviceRoute = DeviceRoute;