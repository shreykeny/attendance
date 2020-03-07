import React, { Component } from 'react';
import './component.css';


var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyfY0seuQ5PNJHPL' }).base('app5g4evkKgoFTBuR');

let count = 0;

let status_person = [];

let Attendance = () => {

    let mark = () => {


        let employeelist = document.getElementById('employee_list');



        base('Employee directory').select({
            // Selecting the first 3 records in All employees:

            view: "All employees"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.

            records.forEach(function (record) {



                let newdiv = document.createElement('div');
                let span = document.createElement('span');
                let checkbox = document.createElement('input');

                newdiv.setAttribute('id', count);

                span.setAttribute('id', "span" + count);

                checkbox.setAttribute('type', 'checkbox')
                checkbox.setAttribute('id', 'checkbox' + count);



                span.innerText = record.get('Name');

                employeelist.appendChild(newdiv);
                newdiv.appendChild(span);

                newdiv.appendChild(checkbox);


                console.log(record.get('Name'));
                count++;

            }

            );



            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();

        }, function done(err) {
            if (err) { console.error(err); return; }
        });

        document.getElementById('employee_list').removeChild(document.getElementById('showdata'));
    }

    let submit = () => {


        // let submitdata = document.getElementById('checkbox0');
        // console.log(submitdata.checked);



        // console.log(status_person)


        let array = [];
        let count = 0;
        var Airtable = require('airtable');
        var base = new Airtable({ apiKey: 'keyfY0seuQ5PNJHPL' }).base('app5g4evkKgoFTBuR');

        base('Employee directory').select({
            // Selecting the first 3 records in All employees:

            view: "All employees"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.

            records.forEach(function (record) {
                array.push({
                    id: record.id,
                    name: record.get('Name')


                })
            });

            console.log(array);

            count = array.length;

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();


            // CHECK BOX 

            console.log(count)


            for (let o = 0; o < count; o++) {
                let submitdat = document.getElementById('checkbox' + o);
                if (submitdat.checked == true) {
                    status_person.push('1')
                }

                if (submitdat.checked == false) {
                    status_person.push('0')
                }
            }

            console.log(status_person);
            //CHECK BOX SEND

            // UODATE STARTS
            for(let k = 0 ; k < count ; k ++ ){
            base('Employee directory').update([
                {
                    "id": array[k].id,
                    "fields": {
                        "present": status_person[k]
                    }
                }

            ], function (err, records) {
                if (err) {
                    console.error(err);
                    return;
                }
                records.forEach(function (record) {
                    console.log(record.get('Photo'));
                });
            });
        }

            //UPDATE ENDS



        }, function done(err) {
            if (err) { console.error(err); return; }
        });




    }


    return (
        <div>
            <div id="employee_list">

                <button id="showdata" onClick={mark}> Show Attendees</button>

                <button id="submit-data" onClick={submit}> Submit</button>

            </div>

        </div>
    )
}



export default Attendance;