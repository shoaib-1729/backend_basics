// DNS Module
import dns from "dns";

// lookup method
dns.lookup("geekyshows.com", (error, address, family) => {
    if (error) {
        throw error;
    }
    console.log(address);
    console.log(family);
})

// resolve method
dns.resolve('youtube.com', 'NS', (error, records) => {
    if (error) {
        throw error;
    }
    console.log(records);
})