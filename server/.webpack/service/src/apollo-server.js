/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./database/index.ts":
/*!***************************!*\
  !*** ./database/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getConnection = void 0;
const mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ "mongoose"));
const uri = process.env.MONGO_URL;
let conn = null;
const getConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    if ((conn = null)) {
        conn = yield mongoose_1.default.createConnection(uri, {
            bufferCommands: false,
            bufferMaxEntries: 0,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
    }
    return conn;
});
exports.getConnection = getConnection;


/***/ }),

/***/ "./src/apollo-server.ts":
/*!******************************!*\
  !*** ./src/apollo-server.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.graphqlHandler = void 0;
const apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
const resolvers_1 = __webpack_require__(/*! ./resolvers */ "./src/resolvers.ts");
const type_defs_1 = __webpack_require__(/*! ./type-defs */ "./src/type-defs.ts");
const database_1 = __webpack_require__(/*! ../database */ "./database/index.ts");
const apolloServer = new apollo_server_lambda_1.ApolloServer({
    resolvers: resolvers_1.resolvers,
    typeDefs: type_defs_1.typeDefs,
    context: () => __awaiter(void 0, void 0, void 0, function* () {
        const dbConn = yield database_1.getConnection();
        return { dbConn };
    }),
    playground: true,
    introspection: true,
});
exports.graphqlHandler = apolloServer.createHandler();


/***/ }),

/***/ "./src/resolvers.ts":
/*!**************************!*\
  !*** ./src/resolvers.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        testMessage: () => 'Hello World!',
    },
};


/***/ }),

/***/ "./src/type-defs.ts":
/*!**************************!*\
  !*** ./src/type-defs.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.typeDefs = void 0;
const apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
exports.typeDefs = apollo_server_lambda_1.gql `
  type Query {
    getClubsInfo: [Club]
  }

  type Club {
    _id: ID!
    name: String!
    Amount: Int
  }

  type Query {
    """
    A test message.
    """
    testMessage: String!
  }
`;


/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("apollo-server-lambda");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/apollo-server.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL2Fwb2xsby1zZXJ2ZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXRhLWthaS1rb2hhLy4vZGF0YWJhc2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8va2V0YS1rYWkta29oYS8uL3NyYy9hcG9sbG8tc2VydmVyLnRzIiwid2VicGFjazovL2tldGEta2FpLWtvaGEvLi9zcmMvcmVzb2x2ZXJzLnRzIiwid2VicGFjazovL2tldGEta2FpLWtvaGEvLi9zcmMvdHlwZS1kZWZzLnRzIiwid2VicGFjazovL2tldGEta2FpLWtvaGEvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWxhbWJkYVwiIiwid2VicGFjazovL2tldGEta2FpLWtvaGEvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL2tldGEta2FpLWtvaGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2V0YS1rYWkta29oYS93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCB1cmk6IHN0cmluZyA9IHByb2Nlc3MuZW52Lk1PTkdPX1VSTDtcblxubGV0IGNvbm46IG1vbmdvb3NlLkNvbm5lY3Rpb24gPSBudWxsO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29ubmVjdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPG1vbmdvb3NlLkNvbm5lY3Rpb24+ID0+IHtcbiAgaWYgKChjb25uID0gbnVsbCkpIHtcbiAgICBjb25uID0gYXdhaXQgbW9uZ29vc2UuY3JlYXRlQ29ubmVjdGlvbih1cmksIHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICAgIGJ1ZmZlck1heEVudHJpZXM6IDAsXG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gY29ubjtcbn07XG4iLCJpbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1sYW1iZGFcIjtcbmltcG9ydCB7IHJlc29sdmVycyB9IGZyb20gXCIuL3Jlc29sdmVyc1wiO1xuaW1wb3J0IHsgdHlwZURlZnMgfSBmcm9tIFwiLi90eXBlLWRlZnNcIjtcbmltcG9ydCB7IGdldENvbm5lY3Rpb24gfSBmcm9tIFwiLi4vZGF0YWJhc2VcIjtcblxuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIHJlc29sdmVycyxcbiAgdHlwZURlZnMsXG4gIGNvbnRleHQ6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBkYkNvbm4gPSBhd2FpdCBnZXRDb25uZWN0aW9uKCk7XG4gICAgcmV0dXJuIHsgZGJDb25uIH07XG4gIH0sXG4gIHBsYXlncm91bmQ6IHRydWUsXG4gIGludHJvc3BlY3Rpb246IHRydWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdyYXBocWxIYW5kbGVyID0gYXBvbGxvU2VydmVyLmNyZWF0ZUhhbmRsZXIoKTtcbiIsImV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gICAgUXVlcnk6IHtcbiAgICAgIHRlc3RNZXNzYWdlOiAoKSA9PiAnSGVsbG8gV29ybGQhJyxcbiAgICB9LFxuICB9OyIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWxhbWJkYVwiO1xuXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXG4gIHR5cGUgUXVlcnkge1xuICAgIGdldENsdWJzSW5mbzogW0NsdWJdXG4gIH1cblxuICB0eXBlIENsdWIge1xuICAgIF9pZDogSUQhXG4gICAgbmFtZTogU3RyaW5nIVxuICAgIEFtb3VudDogSW50XG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBcIlwiXCJcbiAgICBBIHRlc3QgbWVzc2FnZS5cbiAgICBcIlwiXCJcbiAgICB0ZXN0TWVzc2FnZTogU3RyaW5nIVxuICB9XG5gO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1sYW1iZGFcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBvbGxvLXNlcnZlci50c1wiKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7QUNOQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7QUNyQkE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==