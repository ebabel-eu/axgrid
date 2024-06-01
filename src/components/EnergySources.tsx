import { FC } from 'react';

interface EnergySourcesProps {
}

const energySourcesConfiguration = {
  "energySources": [
    {
      "name": "Solar",
      "inputs": [
        {
          "name": "Capacity",
          "type": "number",
          "inputmode": "decimal",
          "units": [
            {
              "name": "MW",
              "description": "megawatt",
              "value": 1000,
              "isBaseUnit": false,
              "isDefaultUnit": false
            },
            {
              "name": "kW",
              "description": "kilowatt",
              "value": 1,
              "isBaseUnit": true,
              "isDefaultUnit": true
            }
          ]
        },
        {
          "name": "Location",
          "type": "object",
          "inputs": [
            {
              "name": "Latitude",
              "type": "number",
              "inputmode": "decimal"
            },
            {
              "name": "Longitude",
              "type": "number",
              "inputmode": "decimal"
            }
          ]
        },
        {
          "name": "Energy Output Predictions",
          "type": "array",
          "inputs": [
            {
              "name": "Date",
              "type": "date",
              "inputmode": "datetime-local"
            },
            {
              "name": "Energy Output",
              "type": "number",
              "inputmode": "decimal",
              "units": [
                {
                  "name": "MWh",
                  "description": "megawatt-hour",
                  "value": 1000,
                  "isBaseUnit": false,
                  "isDefaultUnit": false
                },
                {
                  "name": "kWh",
                  "description": "kilowatt-hour",
                  "value": 1,
                  "isBaseUnit": true,
                  "isDefaultUnit": true
                }
              ]
            }
          ]
        },
        {
          "name": "Time of Availability",
          "type": "array",
          "inputs": [
            {
              "name": "Start Time",
              "type": "time",
              "inputmode": "time"
            },
            {
              "name": "End Time",
              "type": "time",
              "inputmode": "time"
            }
          ]
        },
        {
          "name": "Certifications",
          "type": "array",
          "inputs": [
            {
              "name": "Name",
              "type": "string",
              "inputmode": "text"
            },
            {
              "name": "Description",
              "type": "string",
              "inputmode": "text"
            },
            {
              "name": "Value",
              "type": "number",
              "inputmode": "decimal",
              "unit": "Euros"
            }
          ]
        }
      ]
    },
    {
      "name": "Gas",
    },
    {
      "name": "Wind",
    },
    {
      "name": "Hydro",
    },
    {
      "name": "Kinetic",
    },
    {
      "name": "Thermal",
    },
  ]
};

const EnergySources: FC<EnergySourcesProps> = () => {
  return (
    <main>
      <h1>Energy Sources</h1>


      <h2>JSON configuration</h2>
      <p>Edit existing energy source inputs or add new energy sources by updating the JSON configuration</p>
      <textarea className="jsonConfigurationTextarea" defaultValue={JSON.stringify(energySourcesConfiguration, null, 2)} />
    </main>
  );
};

export default EnergySources;