class StudentController {
    // get session information
    static get_session_info = (req, res) => {
        console.log(req.session);
        console.log(req.sessionID);
        console.log(req.session.id);
        console.log(req.session.cookie);
        console.log(req.session.cookie.maxAge);
        console.log(req.session.cookie.originalMaxAge);

        res.send("Session Info...")
    }

    // regenerate session
    // server par session information ko regenerate kar dega
    static regn_session = (req, res) => {
        req.session.regenerate(() => {
            console.log(`Session Regenerated...New Session ID ${req.session.id}`);

        })

    }

    // delete session
    // server se session information ko delete kar dega
    static delete_session = (req, res) => {
        req.session.destroy(() => {
            console.log(`Session Deleted....\nCannot Access Session ${req.session.id}`);
        })
        res.send("Session Deleted..")
    }

    // storing variables using session (session variables)
    static session_example = (req, res) => {
        // ek count variable store karwayege
        // agar count variable nahi hai toh pehle create karo. agar hai toh ek se increment kardo
        // session expire hone par count wapas one se initialize hoga
        req.session.device = "Mobile"
        if (req.session.count) {
            req.session.count++
        } else {
            req.session.count = 1;
        }
        res.send(`Count: ${req.session.count}`)
    }

    static get_session_data = (req, res) => {
        if (req.session.device) {
            res.send(`Device: ${req.session.device} Count:${req.session.count}`)
        } else {
            res.send("Device Not Found")
        }
    }


}


export default StudentController