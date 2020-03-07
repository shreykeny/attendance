import React, { Component } from 'react';
import Page from './Page';




let Login = () => {

    let array = [];



    let verify = () => {



        let username = document.getElementById('login-username').value;
        let password = document.getElementById('login-password').value;
        var Airtable = require('airtable');
        var base = new Airtable({ apiKey: 'keyfY0seuQ5PNJHPL' }).base('app5g4evkKgoFTBuR');

        base('Employee directory').select({
            // Selecting the first 3 records in All employees:
            view: "All employees"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.

            records.forEach(function (record) {
                array.push({
                    name: record.get('Name'),
                    email: record.get('Email'),
                    password: record.get('Password')
                });

            });

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();



            for (let i = 0; i < array.length; i++) {
                if (username == array[i].email && password == array[i].password) {
                    console.log('true');
                    let name = array[i].name;
                    let content = document.getElementById('content');

                    content.innerHTML = "Hello!" + name;

                    let text1 = document.createElement('input');
                    let text2 = document.createElement('input');


                    text1.setAttribute('type', 'input');
                    text2.setAttribute('type', 'input');

                    content.appendChild(text1);
                    content.appendChild(text2);

                    //UPDATE STARTS 

                    // GETTING ID 

                    var Airtable = require('airtable');
                    var base = new Airtable({ apiKey: 'keyfY0seuQ5PNJHPL' }).base('app5g4evkKgoFTBuR');
                    let array1 = [];
                    let count = 0;

                    base('Employee directory').select({
                        // Selecting the first 3 records in All employees:

                        view: "All employees"
                    }).eachPage(function page(records, fetchNextPage) {
                        // This function (`page`) will get called for each page of records.

                        records.forEach(function (record) {
                            array1.push({
                                id: record.id,
                                name: record.get('Name')


                            })
                        });

                        // To fetch the next page of records, call `fetchNextPage`.
                        // If there are more records, `page` will get called again.
                        // If there are no more records, `done` will get called.
                        fetchNextPage();

                        console.log(array1);

                        count = array1.length;

                    }, function done(err) {
                        if (err) { console.error(err); return; }
                    });


                    //END OF GETTING ID
                    // for(let k = 0 ; k < count ; k ++ ){
                    //     base('1').update([
                    //         {
                    //             "id": array[k].id,
                    //             "fields": {
                    //                 "present": status_person[k]
                    //             }
                    //         }
            
                    //     ], function (err, records) {
                    //         if (err) {
                    //             console.error(err);
                    //             return;
                    //         }
                    //         records.forEach(function (record) {
                    //             console.log(record.get('Photo'));
                    //         });
                    //     });
                    // }


                    //UPDATE ENDS 


                }

            }





        }, function done(err) {
            if (err) { console.error(err); return; }
        });

    }


    return (
        <div>
            <div id="login-div">
                <label for="login-username"> Username </label>
                <input id="login-username" type="text" />

                <br />

                <label for="login-password"> Password </label>
                <input id="login-password" type="password" />

                <br />

                <button onClick={verify}> Login </button>

            </div>

            <div id="content"> </div>


        </div>
    )

}

export default Login; 