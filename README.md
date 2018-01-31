# Parks on the Air Searchable Directory

This is a standalone node.js web server that will fetch the tabular directory of parks from the [Parks on the Air website](https://parksontheair.com) and parse it into a mongodb collection. It is then served up in a single page. Each column can then be filtered.

# Installing

## Prerequisites

You must have a mongodb server working on your local machine, listening on the standard port.

You also need node.js installed. And a working npm installation.

All other dependencies are handled by npm.

## Setup

After you clone the repo:

    $ git clone git@github.com:paulburton0/wwff-directory.git pota
    $ cd pota
    $ git checkout pota

Then:

    $ npm install

to install dependencies. Once that's done, you can do:

    ./updateDirectory
    
to populate the mongodb with data from the POTA website.

Open the startup script (filename: pota), and update the apppath variable so that it points to the correct location.

Make sure that the executable starup script has the same name as the application folder. Above, we cloned the repo into a new 'pota' folder. Make sure that the script is named the same: 'pota'.

Now to start up the web server:

    pota start

Or

    npm start

You should be able to open localhost:3002 in your browser and see the directory.
