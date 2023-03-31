var express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express");
const app = express();
var corsOptions = {
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// connect db
const db = require("./app/models");
const { mongoose, cluster, cropType } = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Agrix Dashboard',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:8081'
      }
    ],
    components: {
      securitySchemes: {
          bearerAuth: {
              type: 'apiKey',
              scheme: 'bearer',
              in: 'header',
              name: 'x-access-token',
              bearerFormat: 'JWT',
          }
      }
    },
    security: [{
        bearerAuth: [],
    }]
  },
  apis: ['./index.js']
}

  
const swaggerSpec = swaggerJSDoc(options)
app.use(
  '/api-docs', 
  swaggerUi.serve, 
  swaggerUi.setup(swaggerSpec, { explorer: true })
);
  
  
// get api for category....
/**
 * @swagger
 *  components:
 *      schema:
 *          category:
 *                  type: object
 *                  properties:
 *                      name:
 *                            type: string
 *                      shortName:
 *                            type: string
 */
  

/**
 * @swagger
 * /api/category/:
 *  get:
 *      summary: view category
 *      tags:
 *        - categories
 *      description: to view all category
 *      responses: 
 *          200:
 *              description: to view all category
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/category'
 */


// post api for category..
/**
 * @swagger
 * /api/category/:
 *  post:
 *      summary: add category
 *      tags:
 *        - categories
 *      description: to add category
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/category'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/category'
 */

// ######################################################################################
// post api for cluster...
/**
 * @swagger
 *  components:
 *      schema:
 *          cluster:
 *                  type: object
 *                  properties:
 *                      clusterName:
 *                            type: string
 *                      clusterCode:
 *                            type: string
 *                      clusterManager:
 *                            type: string
 *                      village:
 *                            type: string
 *                      district:
 *                            type: string
 *                      state: 
 *                            type: string
 *                      officeAddress:
 *                            type: string
 *                      contactDetail:
 *                            type: integer
 *                      customerState:
 *                            type: string
 *                      sales:
 *                            type: string
 *                      purchase:
 *                            type: string
 *                      expenditure:
 *                            type: integer
 *                      hrBasicDetails:
 *                            type: string
 *                      leadDetails:
 *                            type: string
 *                      latitude: 
 *                            type: string
 *                      longitude:
 *                            type: string
 */
  


/**
 * @swagger
 * /api/cluster/:
 *  post:
 *      summary: add cluster
 *      tags:
 *        - clusters
 *      description: to add cluster
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/cluster'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/cluster'
 */


/**
 * @swagger
 * /api/cluster/:
 *  get:
 *      summary: view cluster
 *      tags:
 *        - clusters
 *      description: to view all cluster
 *      responses: 
 *          200:
 *              description: to view all cluster
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/cluster'
 */

/**
 * @swagger
 * /api/cluster/page:
 *  get:
 *      summary: view cluster by page wise
 *      tags:
 *        - clusters
 *      description: to view all cluster
 *      parameters:
 *          - in: query
 *            name: page
 *            required: true
 *            schema: 
 *              type: integer
 *            description: page number required
 *          - in : query
 *            name: size
 *            required: true
 *            schema:
 *              type: integer
 *            description: size required
 *      responses: 
 *          200:
 *              description: to view all cluster
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/cluster'
 */


/**
 * @swagger
 *  /api/cluster/{id}:
 *    get:
 *        summary: To view cluster by object-id
 *        tags:
 *          - clusters
 *        description: to view cluster by object-id
 *        parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/cluster'
 */


/**
 * @swagger
 * /api/cluster/clusterSearch/data:
 *  get:
 *      summary: search cluster
 *      tags:
 *        - clusters
 *      description: to search cluster
 *      parameters:
 *          - in: query
 *            name: clusterCode
 *            required: false
 *            schema: 
 *              type: string
 *            description: clusterCode required to filter
 *          - in : query
 *            name: clusterName
 *            required: false
 *            schema:
 *              type: string
 *            description: clusterName required to filter
 *      responses: 
 *          200:
 *              description: You have to specifiy either `clusterCode` or `clusterName` parameter.
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/cluster'
 */


 /**
 * @swagger
 * /api/cluster/{id}:
 *  put:
 *      summary: update cluster 
 *      tags:
 *        - clusters
 *      description: to update cluster by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/cluster'
 *      responses: 
 *          200:
 *              description: updated successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/cluster'
 */


/**
 * @swagger
 * /api/cluster/{id}:
 *  delete:
 *      summary: To delete cluster by object-id
 *      tags:
 *        - clusters
 *      description: to delete cluster by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      responses: 
 *          200:
 *              description: Deleted successfully
 */

// ################################################################################
// post api for cropsub-type...
/**
 * @swagger
 *  components:
 *      schema:
 *          cropsub-type:
 *                  type: object
 *                  properties:
 *                      cropSubType:
 *                            type: string
 */


/**
 * @swagger
 * /api/cropsubtype/:
 *  post:
 *      summary: add cropSubType
 *      tags:
 *        - crop-subtypes
 *      description: to add cropSubType
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/cropSubType'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/cropSubType'
 */

/**
 * @swagger
 * /api/cropsubtype/:
 *  get:
 *      summary: view cropSubType
 *      tags:
 *        - crop-subtypes
 *      description: to view all cropSubType
 *      responses: 
 *          200:
 *              description: to view all cropSubType
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/cropSubType'
 */

// ###########################################################################
// post api for cropType...
/**
 * @swagger
 *  components:
 *      schema:
 *          croptype:
 *                  type: object
 *                  properties:
 *                      name:
 *                            type: string
 *                      shortName:
 *                            type: string
 */


/**
 * @swagger
 * /api/croptype/:
 *  post:
 *      summary: add croptype
 *      tags:
 *        - croptypes
 *      description: to add croptype
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/croptype'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/croptype'
 */


/**
 * @swagger
 * /api/croptype/:
 *  get:
 *      summary: view croptype
 *      tags:
 *        - croptypes
 *      description: to view all croptype
 *      responses: 
 *          200:
 *              description: to view all croptype
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/croptype'
 */


 /**
 * @swagger
 * /api/croptype/{id}:
 *  put:
 *      summary: update croptype by object-id
 *      tags:
 *        - croptypes
 *      description: to update croptype by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/croptype'
 *      responses: 
 *          200:
 *              description: updated successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/croptype'
 */


/**
 * @swagger
 * /api/croptype/{id}:
 *  delete:
 *      summary: To delete croptype by object-id
 *      tags:
 *        - croptypes
 *      description: to delete croptype by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      responses: 
 *          200:
 *              description: Deleted successfully
 */

// #####################################################################
// post api for cultivation-date....
/**
 * @swagger
 *  components:
 *      schema:
 *          cultivation-date:
 *                  type: object
 *                  properties:
 *                      plotId:
 *                            type: string
 *                      cultivationDate:
 *                            type: string
 */


/**
 * @swagger
 * /api/cultivation/:
 *  post:
 *      summary: add cultivation-date
 *      tags:
 *        - cultivation-dates
 *      description: to add cultivation-date
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/cultivation-date'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/cultivation-date'
 */


/**
 * @swagger
 * /api/cultivation/:
 *  get:
 *      summary: view cultivation
 *      tags:
 *        - cultivation-dates
 *      description: to view all cultivation
 *      responses: 
 *          200:
 *              description: to view all cultivation
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/cultivation'
 */



/**
 * @swagger
 *  /api/cultivation/{plot}:
 *    get:
 *        summary: To view cultivation by plotId
 *        tags:
 *          - cultivation-dates
 *        description: to view cultivation by plotId
 *        parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/cultivation'
 */

// ###############################################################################
// post api district....
/**
 * @swagger
 *  components:
 *      schema:
 *          district:
 *                  type: object
 *                  properties:
 *                      name:
 *                            type: string
 *                      shortName:
 *                            type: string
 *                      stateId: 
 *                            type: object
 */


/**
 * @swagger
 * /api/district/:
 *  post:
 *      summary: add district
 *      tags:
 *        - Districts
 *      description: to add district
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/district'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/district'
 */


/**
 * @swagger
 * /api/district/:
 *  get:
 *      summary: view district
 *      tags:
 *        - Districts
 *      description: to view all district
 *      responses: 
 *          200:
 *              description: to view all district
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/district'
 */



/**
 * @swagger
 *  /api/district/{stateId}:
 *    get:
 *        summary: To view district by stateId
 *        tags:
 *          - Districts
 *        description: to view district by stateId
 *        parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/district'
 */

// #################################################################################
// post api for driver...
/**
 * @swagger
 *  components:
 *      schema:
 *          driver:
 *                  type: object
 *                  properties:
 *                      driverId:
 *                            type: string
 *                      firstName:
 *                            type: string
 *                      lastName:
 *                            type: string
 *                      contactDetails:
 *                            type: string
 *                      village:
 *                            type: string
 *                      district: 
 *                            type: string
 *                      state:
 *                            type: string
 *                      clusterId:
 *                            type: string
 */
  


/**
 * @swagger
 * /api/driver/:
 *  post:
 *      summary: add driver
 *      tags:
 *        - Drivers
 *      description: to add driver
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/driver'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/driver'
 */


/**
 * @swagger
 * /api/driver/:
 *  get:
 *      summary: view driver
 *      tags:
 *        - Drivers
 *      description: to view all driver
 *      responses: 
 *          200:
 *              description: to view all driver
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/driver'
 */

/**
 * @swagger
 * /api/driver/page:
 *  get:
 *      summary: view driver by page wise
 *      tags:
 *        - Drivers
 *      description: to view all driver
 *      parameters:
 *          - in: query
 *            name: page
 *            required: true
 *            schema: 
 *              type: integer
 *            description: page number required
 *          - in : query
 *            name: size
 *            required: true
 *            schema:
 *              type: integer
 *            description: size required
 *      responses: 
 *          200:
 *              description: to view all driver
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/driver'
 */


/**
 * @swagger
 *  /api/driver/{id}:
 *    get:
 *        summary: To view driver by object-id
 *        tags:
 *          - Drivers
 *        description: to view driver by object-id
 *        parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/driver'
 */


/**
 * @swagger
 * /api/driver/driverSearch/data:
 *  get:
 *      summary: search driver
 *      tags:
 *        - Drivers
 *      description: to search driver
 *      parameters:
 *          - in: query
 *            name: firstName
 *            required: false
 *            schema: 
 *              type: string
 *            description: firstName required to filter
 *          - in : query
 *            name: driverId
 *            required: false
 *            schema:
 *              type: string
 *            description: driverId required to filter
 *      responses: 
 *          200:
 *              description: to search driver
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/driver'
 */


 /**
 * @swagger
 * /api/driver/{id}:
 *  put:
 *      summary: update driver by object-id
 *      tags:
 *        - Drivers
 *      description: to update driver by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/driver'
 *      responses: 
 *          200:
 *              description: updated successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/driver'
 */


/**
 * @swagger
 * /api/driver/{id}:
 *  delete:
 *      summary: To delete driver by object-id
 *      tags:
 *        - Drivers
 *      description: to delete driver by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      responses: 
 *          200:
 *              description: Deleted successfully
 */

// ############################################################
// post api for farm-machine....
/**
 * @swagger
 *  components:
 *      schema:
 *          farm-machine:
 *                  type: object
 *                  properties:
 *                      machineId:
 *                            type: string
 *                      scheduleDate:
 *                            type: string
 *                      phoneNumber:
 *                            type: string
 *                      clusterId:
 *                            type: string
 *                      driverId:
 *                            type: string
 *                      attachmentId: 
 *                            type: string
 *                      startTime:
 *                            type: string
 *                      stopTime:
 *                            type: string
 */
  

/**
 * @swagger
 * /api/farm-machine/operation/start:
 *  post:
 *      summary: add farm-machine
 *      tags:
 *        - farm-machines
 *      description: to add farm-machine
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/farm-machine'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/farm-machine'
 */


/**
 * @swagger
 * /api/farm-machine/operation:
 *  get:
 *      summary: view farm-machine
 *      tags:
 *        - farm-machines
 *      description: to view all farm-machine
 *      responses: 
 *          200:
 *              description: to view all farm-machine
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/farm-machine'
 */


/**
 * @swagger
 * /api/farm-machine/page:
 *  get:
 *      summary: view farm-machine by page
 *      tags:
 *        - farm-machines
 *      description: to farm-machine by page
 *      parameters:
 *          - in: query
 *            name: page
 *            required: true
 *            schema: 
 *              type: integer
 *            description: page number required
 *          - in : query
 *            name: size
 *            required: true
 *            schema:
 *              type: integer
 *            description: size required
 *      responses: 
 *          200:
 *              description: to view all farm-machine
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/farm-machine'
 */



/**
 * @swagger
 *  /api/farm-machine/operationhistory/{phoneNumber}:
 *    get:
 *        summary: To view farm-machine by phoneNumber
 *        tags:
 *          - farm-machines
 *        description: to view farm-machine by phoneNumber
 *        parameters:
 *            - in: path
 *              name: phoneNumber
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: integer
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/farm-machine'
 */



 /**
 * @swagger
 * /api/farm-machine/operation/stop:
 *  put:
 *      summary: update farm-machine by object-id
 *      tags:
 *        - farm-machines
 *      description: to update farm-machine by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/farm-machine'
 *      responses: 
 *          200:
 *              description: updated successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/farm-machine'
 */

// ######################################################################
// post api for farm-season....
/**
 * @swagger
 *  components:
 *      schema:
 *          farm-season:
 *                  type: object
 *                  properties:
 *                      farmingSeason:
 *                            type: string
 */
  

/**
 * @swagger
 * /api/farmseason/:
 *  post:
 *      summary: add farm-season
 *      tags:
 *        - farm-seasons
 *      description: to add farm-season
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/farm-season'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/farm-season'
 */


/**
 * @swagger
 * /api/farmseason/:
 *  get:
 *      summary: view farm-season
 *      tags:
 *        - farm-seasons
 *      description: to view all farm-season
 *      responses: 
 *          200:
 *              description: to view all farm-season
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/farm-season'
 */

// ########################################################################
// post api for farmer....
/**
 * @swagger
 *  components:
 *      schema:
 *          farmer:
 *                  type: object
 *                  properties:
 *                      firstName:
 *                            type: string
 *                      lastName:
 *                            type: string
 *                      farmerId:
 *                            type: string
 *                      clusterCode:
 *                            type: string
 *                      ownerType:
 *                            type: string
 *                      address: 
 *                            type: string
 *                      contact:
 *                            type: integer
 *                      clusterId:
 *                            type: string
 *                      farmingSeason:
 *                            type: string
 *                      cropType:
 *                            type: object
 *                      cropSubType:
 *                            type: string
 */
  


/**
 * @swagger
 * /api/farmer/:
 *  post:
 *      summary: add farmer
 *      tags:
 *        - Farmers
 *      description: to add farmer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/farmer'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/farmer'
 */


/**
 * @swagger
 * /api/farmer/:
 *  get:
 *      summary: view farmer
 *      tags:
 *        - Farmers
 *      description: to view all farmer
 *      responses: 
 *          200:
 *              description: to view all farmer
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/farmer'
 */

/**
 * @swagger
 * /api/farmer/page:
 *  get:
 *      summary: view farmer by page wise
 *      tags:
 *        - Farmers
 *      description: to view all farmer
 *      parameters:
 *          - in: query
 *            name: page
 *            required: true
 *            schema: 
 *              type: integer
 *            description: page number required
 *          - in : query
 *            name: size
 *            required: true
 *            schema:
 *              type: integer
 *            description: size required
 *      responses: 
 *          200:
 *              description: to view all farmer
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/farmer'
 */


/**
 * @swagger
 *  /api/farmer/{id}:
 *    get:
 *        summary: To view farmer by object-id
 *        tags:
 *          - Farmers
 *        description: to view farmer by object-id
 *        parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/farmer'
 */


/**
 * @swagger
 * /api/farmer/farmerSearch/data:
 *  get:
 *      summary: search farmer
 *      tags:
 *        - Farmers
 *      description: to search farmer
 *      parameters:
 *          - in: query
 *            name: clusterId
 *            required: false
 *            schema: 
 *              type: string
 *            description: clusterId required to filter
 *          - in : query
 *            name: firstName
 *            required: false
 *            schema:
 *              type: string
 *            description: firstName required to filter
 *      responses: 
 *          200:
 *              description: to search farmer
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/farmer'
 */


/**
 * @swagger
 *  /api/farmer/cluster/{clusterid}:
 *    get:
 *        summary: To view farmer by clusterid
 *        tags:
 *          - Farmers
 *        description: to view farmer by clusterid
 *        parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/farmer'
 */


 /**
 * @swagger
 * /api/farmer/{id}:
 *  put:
 *      summary: update farmer by object-id
 *      tags:
 *        - Farmers
 *      description: to update farmer by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/farmer'
 *      responses: 
 *          200:
 *              description: updated successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/farmer'
 */


/**
 * @swagger
 * /api/farmer/{id}:
 *  delete:
 *      summary: To delete farmer by object-id
 *      tags:
 *        - Farmers
 *      description: to delete farmer by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      responses: 
 *          200:
 *              description: Deleted successfully
 */

// ########################################################
// post api for implement-identifier....
/**
 * @swagger
 *  components:
 *      schema:
 *          identifier:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string
 */
  


/**
 * @swagger
 * /api/identifier/:
 *  post:
 *      summary: add identifier
 *      tags:
 *        - Implement-identifiers
 *      description: to add identifier
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/identifier'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/identifier'
 */


/**
 * @swagger
 * /api/identifier/:
 *  get:
 *      summary: view identifier
 *      tags:
 *        - Implement-identifiers
 *      description: to view all identifier
 *      responses: 
 *          200:
 *              description: to view all identifier
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/identifier'
 */

// #########################################################################3
// post api for implement-name...
/**
 * @swagger
 *  components:
 *      schema:
 *          implement-name:
 *                  type: object
 *                  properties:
 *                      name:
 *                            type: string
 *                      shortName:
 *                            type: string
 */


/**
 * @swagger
 * /api/implementname/:
 *  post:
 *      summary: add implement-name
 *      tags:
 *        - Implement-names
 *      description: to add implement-name
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/implement-name'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/implement-name'
 */


/**
 * @swagger
 * /api/implementname/:
 *  get:
 *      summary: view implement-name
 *      tags:
 *        - Implement-names
 *      description: to view all implement-name
 *      responses: 
 *          200:
 *              description: to view all implement-name
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/implement-name'
 */


 /**
 * @swagger
 * /api/implementname/{id}:
 *  put:
 *      summary: update implement-name by object-id
 *      tags:
 *        - Implement-names
 *      description: to update implement-name by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/implement-name'
 *      responses: 
 *          200:
 *              description: updated successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/implement-name'
 */


/**
 * @swagger
 * /api/implementname/{id}:
 *  delete:
 *      summary: To delete implement-name by object-id
 *      tags:
 *        - Implement-names
 *      description: to delete implement-name by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      responses: 
 *          200:
 *              description: Deleted successfully
 */

// ########################################################################
//post api for machine-brand...
/**
 * @swagger
 *  components:
 *      schema:
 *          machinebrand:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string
 */
  


/**
 * @swagger
 * /api/machinebrand/:
 *  post:
 *      summary: add machinebrand
 *      tags:
 *        - Machine-brands
 *      description: to add machinebrand
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/machinebrand'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/machinebrand'
 */


/**
 * @swagger
 * /api/machinebrand/:
 *  get:
 *      summary: view machinebrand
 *      tags:
 *        - Machine-brands
 *      description: to view all machinebrand
 *      responses: 
 *          200:
 *              description: to view all machinebrand
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/machinebrand'
 */

// ###########################################################################
// post api for machine-horse power.....
/**
 * @swagger
 *  components:
 *      schema:
 *          machinehp:
 *                  type: object
 *                  properties:
 *                      range:
 *                          type: string
 */
  


/**
 * @swagger
 * /api/machinehp/:
 *  post:
 *      summary: add machinehp
 *      tags: 
 *        - Machine-horsepowers
 *      description: to add machinehp
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/machinehp'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/machinehp'
 */


/**
 * @swagger
 * /api/machinehp/:
 *  get:
 *      summary: view machinehp
 *      tags:
 *        - Machine-horsepowers
 *      description: to view all machinehp
 *      responses: 
 *          200:
 *              description: to view all machinehp
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/machinehp'
 */

// ##########################################################################
// post api for machine...
/**
 * @swagger
 *  components:
 *      schema:
 *          machine:
 *                  type: object
 *                  properties:
 *                      implementCode:
 *                            type: string
 *                      implementNameId:
 *                            type: object
 *                      implementCategoryId:
 *                            type: object
 *                      ownershipId:
 *                            type: object
 *                      clusterCode:
 *                            type: object
 *                      cluster: 
 *                            type: string
 *                      implementIdentifier:
 *                            type: string
 *                      horsePower:
 *                            type: string
 *                      wheelDrive:
 *                            type: string
 *                      machineBrand:
 *                            type: string
 *                      model: 
 *                            type: string
 *                      imieNo:
 *                            type: integer
 *                      simNo:
 *                            type: string
 *                      simType: 
 *                            type: string
 */
  


/**
 * @swagger
 * /api/machine/:
 *  post:
 *      summary: add machine
 *      tags:
 *        - Machines
 *      description: to add machine
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/machine'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/machine'
 */


/**
 * @swagger
 * /api/machine/:
 *  get:
 *      summary: view machine
 *      tags:
 *        - Machines
 *      description: to view all machine
 *      responses: 
 *          200:
 *              description: to view all machine
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/machine'
 */

/**
 * @swagger
 * /api/machine/page:
 *  get:
 *      summary: view machine by page wise
 *      tags:
 *        - Machines
 *      description: to view all machine
 *      parameters:
 *          - in: query
 *            name: page
 *            required: true
 *            schema: 
 *              type: integer
 *            description: page number required
 *          - in : query
 *            name: size
 *            required: true
 *            schema:
 *              type: integer
 *            description: size required
 *      responses: 
 *          200:
 *              description: to view all machine
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/machine'
 */


/**
 * @swagger
 *  /api/machine/{id}:
 *    get:
 *        summary: To view machine by object-id
 *        tags:
 *          - Machines
 *        description: to view machine by object-id
 *        parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/machine'
 */


/**
 * @swagger
 * /api/machine/machineSearch/data:
 *  get:
 *      summary: search machine
 *      tags:
 *        - Machines
 *      description: to search machine
 *      parameters:
 *          - in: query
 *            name: implementCode
 *            required: true
 *            schema: 
 *              type: string
 *            description: implementCode required to filter
 *      responses: 
 *          200:
 *              description: to search machine
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/machine'
 */


 /**
 * @swagger
 * /api/machine/{id}:
 *  put:
 *      summary: update machine by object-id
 *      tags:
 *        - Machines
 *      description: to update machine by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/machine'
 *      responses: 
 *          200:
 *              description: updated successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/machine'
 */


/**
 * @swagger
 * /api/machine/{id}:
 *  delete:
 *      summary: To delete machine by object-id
 *      tags: 
 *        - Machines
 *      description: to delete machine by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      responses: 
 *          200:
 *              description: Deleted successfully
 */

// ######################################################################
// post api for ownertype....
/**
 * @swagger
 *  components:
 *      schema:
 *          ownertype:
 *                  type: object
 *                  properties:
 *                      ownerType:
 *                          type: string
 */
  


/**
 * @swagger
 * /api/ownertype/:
 *  post:
 *      summary: add ownertype
 *      tags:
 *        - ownertypes
 *      description: to add ownertype
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/ownertype'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/ownertype'
 */


/**
 * @swagger
 * /api/ownertype/:
 *  get:
 *      summary: view ownertype
 *      tags:
 *        - ownertypes
 *      description: to view all ownertype
 *      responses: 
 *          200:
 *              description: to view all ownertype
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/ownertype'
 */

// #########################################################################
// post api for plot...
/**
 * @swagger
 *  components:
 *      schema:
 *          plot:
 *                  type: object
 *                  properties:
 *                      farmerId:
 *                            type: string
 *                      state:
 *                            type: string
 *                      location:
 *                            type: string
 *                      village:
 *                            type: string
 *                      district:
 *                            type: string
 *                      latitude: 
 *                            type: integer
 *                      long:
 *                            type: integer
 *                      areaOfPlot:
 *                            type: integer
 *                      perimeterOfPlot:
 *                            type: integer
 *                      plotShape:
 *                            type: object
 *                      soilType:
 *                            type: string
 *                      nutrientContentAnalysis:
 *                            type: string
 *                      waterSource: 
 *                            type: string
 *                      plotId:
 *                            type: string
 *                      clusterId:
 *                            type: string
 *                      googleEarthLink:
 *                            type: string
 */
  


/**
 * @swagger
 * /api/plot/:
 *  post:
 *      summary: add plot
 *      tags:
 *        - Plots
 *      description: to add plot
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/plot'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/plot'
 */


/**
 * @swagger
 * /api/plot/:
 *  get:
 *      summary: view plot
 *      tags:
 *        - Plots
 *      description: to view all plot
 *      responses: 
 *          200:
 *              description: to view all plot
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/plot'
 */


/**
 * @swagger
 *  /api/plot/page/{farmerId}:
 *    get:
 *        summary: To view plot by farmerId on page wise
 *        tags:
 *          - Plots
 *        description: to view plot by farmerId on page wise
 *        parameters:
 *          - in: query
 *            name: page
 *            required: true
 *            description: page number required
 *            schema: 
 *              type: integer
 *          - in : query
 *            name: size
 *            required: true
 *            description: size required
 *            schema:
 *              type: integer
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/plot'
 */


/**
 * @swagger
 *  /api/plot/plotById/{id}:
 *    get:
 *        summary: To view plot by object-id
 *        tags:
 *          - Plots
 *        description: to view plot by object-id
 *        parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/plot'
 */


/**
 * @swagger
 * /api/plot/plotSearch/data:
 *  get:
 *      summary: search plot
 *      tags:
 *        - Plots
 *      description: to search plot
 *      parameters:
 *          - in: query
 *            name: plotId
 *            required: true
 *            schema: 
 *              type: string
 *            description: plotId required to filter
 *      responses: 
 *          200:
 *              description: to search plot
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/plot'
 */


/**
 * @swagger
 *  /api/plot/{farmerId}:
 *    get:
 *        summary: To view plot by farmerId
 *        tags: 
 *          - Plots
 *        description: to view plot by farmerId
 *        parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/plot'
 */



/**
 * @swagger
 *  /api/plot/plotcount/{farmerId}:
 *    get:
 *        summary: To view and count plot by farmerId
 *        tags:
 *          - Plots
 *        description: to view and count plot by farmerId
 *        parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/plot'
 */




/**
 * @swagger
 *  /api/plot/clusterId/{cluster}:
 *    get:
 *        summary: To view plot by clusterId
 *        tags:
 *          - Plots
 *        description: to view plot by clusterId
 *        parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/plot'
 */



 /**
 * @swagger
 * /api/plot/{id}:
 *  put:
 *      summary: update plot by object-id
 *      tags:
 *        - Plots
 *      description: to update plot by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/plot'
 *      responses: 
 *          200:
 *              description: updated successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/plot'
 */


/**
 * @swagger
 * /api/plot/{id}:
 *  delete:
 *      summary: To delete plot by object-id
 *      tags:
 *        - Plots
 *      description: to delete plot by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      responses: 
 *          200:
 *              description: Deleted successfully
 */

// ##########################################################
// post api for state...
/**
 * @swagger
 *  components:
 *      schema:
 *          state:
 *                  type: object
 *                  properties:
 *                      ownerType:
 *                          type: string
 */
  

/**
 * @swagger
 * /api/state/:
 *  post:
 *      summary: add state
 *      tags:
 *        - states
 *      description: to add state
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/state'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/state'
 */


/**
 * @swagger
 * /api/state/:
 *  get:
 *      summary: view state
 *      tags:
 *        - states
 *      description: to view all state
 *      responses: 
 *          200:
 *              description: to view all state
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/state'
 */



/**
 * @swagger
 *  /api/state/{_id}:
 *    get:
 *        summary: To view state by object-Id
 *        tags:
 *          - states
 *        description: to view state by object-Id
 *        parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/state'
 */


// ###########################################################################3
// post api for variety....
/**
 * @swagger
 *  components:
 *      schema:
 *          variety:
 *                  type: object
 *                  properties:
 *                      name:
 *                            type: string
 *                      shortName:
 *                            type: string
 *                      cropId:
 *                            type: object
 */


/**
 * @swagger
 * /api/varieties/:
 *  post:
 *      summary: add variety
 *      tags:
 *        - varieties
 *      description: to add variety
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/variety'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/variety'
 */


/**
 * @swagger
 * /api/varieties/:
 *  get:
 *      summary: view variety
 *      tags:
 *        - varieties
 *      description: to view all variety
 *      responses: 
 *          200:
 *              description: to view all variety
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/variety'
 */


/**
 * @swagger
 *  /api/varieties/{cropId}:
 *    get:
 *        summary: To view variety by cropId
 *        tags:
 *          - varieties
 *        description: to view variety by cropId
 *        parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: object ID required
 *              schema:
 *                type: string
 *        responses: 
 *            200:
 *                description: to view 
 *                content: 
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items: 
 *                                $ref: '#components/schema/variety'
 */


 /**
 * @swagger
 * /api/varieties/{id}:
 *  put:
 *      summary: update variety by object-id
 *      tags:
 *        - varieties
 *      description: to update variety by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/variety'
 *      responses: 
 *          200:
 *              description: updated successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/variety'
 */


/**
 * @swagger
 * /api/varieties/{_id}:
 *  delete:
 *      summary: To delete variety by object-id
 *      tags: 
 *        - varieties
 *      description: to delete variety by object-id
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: object ID required
 *            schema:
 *              type: string
 *      responses: 
 *          200:
 *              description: Deleted successfully
 */

// ###################################################################
// post api for vendor...
/**
 * @swagger
 *  components:
 *      schema:
 *          vendor:
 *                  type: object
 *                  properties:
 *                      name:
 *                          type: string
 *                      address:
 *                          type: string
 *                      vendorIdentifier:
 *                          type: string
 */
  


/**
 * @swagger
 * /api/vendor/:
 *  post:
 *      summary: add vendor
 *      tags:
 *        - Vendors
 *      description: to add vendor
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/vendor'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/vendor'
 */


/**
 * @swagger
 * /api/vendor/:
 *  get:
 *      summary: view vendor
 *      tags:
 *        - Vendors
 *      description: to view all vendor
 *      responses: 
 *          200:
 *              description: to view all vendor
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items: 
 *                              $ref: '#components/schema/vendor'
 */

// #################################################################3
// post api for user...
/**
 * @swagger
 *  components:
 *      schema:
 *          user:
 *              type: object
 *              properties:
 *                  username:
 *                        type: string
 *                  email:
 *                        type: string
 *                  password:
 *                        type: string
 *                  roles:
 *                        type: array 
 */
  

/**
 * @swagger
 * /api/auth/signup/:
 *  post:
 *      summary: To add an new account
 *      tags:
 *        - users
 *      description: To add an new account
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/user'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items: 
 *                              $ref: '#components/schema/user'
 */


/**
 * @swagger
 * /api/auth/signin/:
 *  post:
 *      summary: To login to an existing account
 *      tags:
 *        - users
 *      description: To login to an existing account
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/user'
 *      responses: 
 *          200:
 *              description: Added successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#components/schema/user'
 */





require("./app/routes/farm-machine-route")(app);
require("./app/routes/cluster-route")(app);
require("./app/routes/farmer-route")(app);
require("./app/routes/plot-route")(app);
require("./app/routes/driver-route")(app);
require("./app/routes/state-route")(app);
require("./app/routes/district-route")(app);
require("./app/routes/common-route")(app);
require("./app/routes/owner-type-route")(app);
require("./app/routes/farm-season-route")(app);
require("./app/routes/crop-type-route")(app);
require("./app/routes/crop-sub-type-route")(app);
require("./app/routes/variety-route")(app);
require("./app/routes/user-route")(app);
require("./app/routes/auth-route")(app);
require("./app/routes/clusterId.route")(app);
require("./app/routes/machine-route")(app);
require("./app/routes/auth-route")(app);
require("./app/routes/implement-name-route")(app);
require("./app/routes/category-route")(app);
require("./app/routes/implement-identifier-route")(app);
require("./app/routes/vendor-route")(app);
require("./app/routes/machine-hp-route")(app);
require("./app/routes/machine-brand-route")(app);
require("./app/routes/cultivation-route")(app);


  // set port, listen for requests
const PORT = process.env.PORT || 8081;
app.get("/", (req, res) => res.json({message: "Welcome to our deliveryHistory Application!"}));



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
