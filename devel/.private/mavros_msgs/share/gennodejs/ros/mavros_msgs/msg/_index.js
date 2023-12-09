
"use strict";

let ESCStatus = require('./ESCStatus.js');
let HilSensor = require('./HilSensor.js');
let LogData = require('./LogData.js');
let GPSINPUT = require('./GPSINPUT.js');
let TerrainReport = require('./TerrainReport.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let BatteryStatus = require('./BatteryStatus.js');
let FileEntry = require('./FileEntry.js');
let Mavlink = require('./Mavlink.js');
let State = require('./State.js');
let HilControls = require('./HilControls.js');
let DebugValue = require('./DebugValue.js');
let Vibration = require('./Vibration.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let ESCInfo = require('./ESCInfo.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let Param = require('./Param.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let Thrust = require('./Thrust.js');
let RTKBaseline = require('./RTKBaseline.js');
let StatusText = require('./StatusText.js');
let Waypoint = require('./Waypoint.js');
let ExtendedState = require('./ExtendedState.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let HomePosition = require('./HomePosition.js');
let GPSRTK = require('./GPSRTK.js');
let Trajectory = require('./Trajectory.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let WaypointList = require('./WaypointList.js');
let WaypointReached = require('./WaypointReached.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let HilGPS = require('./HilGPS.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let VFR_HUD = require('./VFR_HUD.js');
let ManualControl = require('./ManualControl.js');
let LandingTarget = require('./LandingTarget.js');
let RCIn = require('./RCIn.js');
let CommandCode = require('./CommandCode.js');
let VehicleInfo = require('./VehicleInfo.js');
let ActuatorControl = require('./ActuatorControl.js');
let RTCM = require('./RTCM.js');
let RadioStatus = require('./RadioStatus.js');
let RCOut = require('./RCOut.js');
let CellularStatus = require('./CellularStatus.js');
let GPSRAW = require('./GPSRAW.js');
let LogEntry = require('./LogEntry.js');
let PositionTarget = require('./PositionTarget.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let Tunnel = require('./Tunnel.js');
let MountControl = require('./MountControl.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let Altitude = require('./Altitude.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let ParamValue = require('./ParamValue.js');

module.exports = {
  ESCStatus: ESCStatus,
  HilSensor: HilSensor,
  LogData: LogData,
  GPSINPUT: GPSINPUT,
  TerrainReport: TerrainReport,
  OverrideRCIn: OverrideRCIn,
  GlobalPositionTarget: GlobalPositionTarget,
  HilActuatorControls: HilActuatorControls,
  BatteryStatus: BatteryStatus,
  FileEntry: FileEntry,
  Mavlink: Mavlink,
  State: State,
  HilControls: HilControls,
  DebugValue: DebugValue,
  Vibration: Vibration,
  AttitudeTarget: AttitudeTarget,
  ESCInfo: ESCInfo,
  ADSBVehicle: ADSBVehicle,
  Param: Param,
  PlayTuneV2: PlayTuneV2,
  ESCStatusItem: ESCStatusItem,
  Thrust: Thrust,
  RTKBaseline: RTKBaseline,
  StatusText: StatusText,
  Waypoint: Waypoint,
  ExtendedState: ExtendedState,
  ESCInfoItem: ESCInfoItem,
  HilStateQuaternion: HilStateQuaternion,
  HomePosition: HomePosition,
  GPSRTK: GPSRTK,
  Trajectory: Trajectory,
  EstimatorStatus: EstimatorStatus,
  WaypointList: WaypointList,
  WaypointReached: WaypointReached,
  ESCTelemetry: ESCTelemetry,
  HilGPS: HilGPS,
  WheelOdomStamped: WheelOdomStamped,
  CamIMUStamp: CamIMUStamp,
  MagnetometerReporter: MagnetometerReporter,
  VFR_HUD: VFR_HUD,
  ManualControl: ManualControl,
  LandingTarget: LandingTarget,
  RCIn: RCIn,
  CommandCode: CommandCode,
  VehicleInfo: VehicleInfo,
  ActuatorControl: ActuatorControl,
  RTCM: RTCM,
  RadioStatus: RadioStatus,
  RCOut: RCOut,
  CellularStatus: CellularStatus,
  GPSRAW: GPSRAW,
  LogEntry: LogEntry,
  PositionTarget: PositionTarget,
  OpticalFlowRad: OpticalFlowRad,
  Tunnel: Tunnel,
  MountControl: MountControl,
  CompanionProcessStatus: CompanionProcessStatus,
  ESCTelemetryItem: ESCTelemetryItem,
  Altitude: Altitude,
  NavControllerOutput: NavControllerOutput,
  TimesyncStatus: TimesyncStatus,
  CameraImageCaptured: CameraImageCaptured,
  OnboardComputerStatus: OnboardComputerStatus,
  ParamValue: ParamValue,
};
