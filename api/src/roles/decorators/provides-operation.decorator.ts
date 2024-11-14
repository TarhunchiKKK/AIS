import { Reflector } from "@nestjs/core";
import { Operations } from "../enums/operations.enum";

export const ProvidesOperation = Reflector.createDecorator<Operations>();
