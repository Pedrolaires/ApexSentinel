// Generated from src/grammar/apex.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { apexVisitor } from "./apexVisitor";


export class apexParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly SoqlLiteral = 2;
	public static readonly OVERRIDE = 3;
	public static readonly VIRTUAL = 4;
	public static readonly SET = 5;
	public static readonly GET = 6;
	public static readonly ABSTRACT = 7;
	public static readonly BREAK = 8;
	public static readonly BYTE = 9;
	public static readonly CATCH = 10;
	public static readonly CHAR = 11;
	public static readonly CLASS = 12;
	public static readonly CONST = 13;
	public static readonly CONTINUE = 14;
	public static readonly DEFAULT = 15;
	public static readonly DO = 16;
	public static readonly ELSE = 17;
	public static readonly ENUM = 18;
	public static readonly EXTENDS = 19;
	public static readonly FINAL = 20;
	public static readonly FINALLY = 21;
	public static readonly FLOAT = 22;
	public static readonly FOR = 23;
	public static readonly IF = 24;
	public static readonly GOTO = 25;
	public static readonly IMPLEMENTS = 26;
	public static readonly IMPORT = 27;
	public static readonly INSTANCEOF = 28;
	public static readonly INT = 29;
	public static readonly INTERFACE = 30;
	public static readonly NATIVE = 31;
	public static readonly NEW = 32;
	public static readonly PACKAGE = 33;
	public static readonly PRIVATE = 34;
	public static readonly PROTECTED = 35;
	public static readonly PUBLIC = 36;
	public static readonly RETURN = 37;
	public static readonly SHORT = 38;
	public static readonly STATIC = 39;
	public static readonly SUPER = 40;
	public static readonly SYNCHRONIZED = 41;
	public static readonly THIS = 42;
	public static readonly THROW = 43;
	public static readonly THROWS = 44;
	public static readonly TRANSIENT = 45;
	public static readonly TRY = 46;
	public static readonly VOID = 47;
	public static readonly VOLATILE = 48;
	public static readonly WHILE = 49;
	public static readonly GLOBAL = 50;
	public static readonly WEBSERVICE = 51;
	public static readonly APEX_WITH_SHARING = 52;
	public static readonly APEX_WITHOUT_SHARING = 53;
	public static readonly SELECT = 54;
	public static readonly DB_INSERT = 55;
	public static readonly DB_UPSERT = 56;
	public static readonly DB_UPDATE = 57;
	public static readonly DB_DELETE = 58;
	public static readonly DB_UNDELETE = 59;
	public static readonly TESTMETHOD = 60;
	public static readonly RUNAS = 61;
	public static readonly IntegerLiteral = 62;
	public static readonly FloatingPointLiteral = 63;
	public static readonly BooleanLiteral = 64;
	public static readonly CharacterLiteral = 65;
	public static readonly StringLiteral = 66;
	public static readonly NullLiteral = 67;
	public static readonly LPAREN = 68;
	public static readonly RPAREN = 69;
	public static readonly LBRACE = 70;
	public static readonly RBRACE = 71;
	public static readonly LBRACK = 72;
	public static readonly RBRACK = 73;
	public static readonly SEMI = 74;
	public static readonly COMMA = 75;
	public static readonly DOT = 76;
	public static readonly ASSIGN = 77;
	public static readonly GT = 78;
	public static readonly LT = 79;
	public static readonly BANG = 80;
	public static readonly TILDE = 81;
	public static readonly QUESTION = 82;
	public static readonly COLON = 83;
	public static readonly EQUAL = 84;
	public static readonly LE = 85;
	public static readonly GE = 86;
	public static readonly NOTEQUAL = 87;
	public static readonly AND = 88;
	public static readonly OR = 89;
	public static readonly INC = 90;
	public static readonly DEC = 91;
	public static readonly ADD = 92;
	public static readonly SUB = 93;
	public static readonly MUL = 94;
	public static readonly DIV = 95;
	public static readonly BITAND = 96;
	public static readonly BITOR = 97;
	public static readonly CARET = 98;
	public static readonly MOD = 99;
	public static readonly ADD_ASSIGN = 100;
	public static readonly SUB_ASSIGN = 101;
	public static readonly MUL_ASSIGN = 102;
	public static readonly DIV_ASSIGN = 103;
	public static readonly AND_ASSIGN = 104;
	public static readonly OR_ASSIGN = 105;
	public static readonly XOR_ASSIGN = 106;
	public static readonly MOD_ASSIGN = 107;
	public static readonly LSHIFT_ASSIGN = 108;
	public static readonly RSHIFT_ASSIGN = 109;
	public static readonly URSHIFT_ASSIGN = 110;
	public static readonly LAMBDA_LIKE = 111;
	public static readonly Identifier = 112;
	public static readonly AT = 113;
	public static readonly ELLIPSIS = 114;
	public static readonly WS = 115;
	public static readonly APEXDOC_COMMENT = 116;
	public static readonly APEXDOC_COMMENT_START = 117;
	public static readonly COMMENT = 118;
	public static readonly COMMENT_START = 119;
	public static readonly LINE_COMMENT = 120;
	public static readonly QUOTE = 121;
	public static readonly RULE_compilationUnit = 0;
	public static readonly RULE_packageDeclaration = 1;
	public static readonly RULE_importDeclaration = 2;
	public static readonly RULE_typeDeclaration = 3;
	public static readonly RULE_modifier = 4;
	public static readonly RULE_classOrInterfaceModifier = 5;
	public static readonly RULE_variableModifier = 6;
	public static readonly RULE_classDeclaration = 7;
	public static readonly RULE_typeParameters = 8;
	public static readonly RULE_typeParameter = 9;
	public static readonly RULE_typeBound = 10;
	public static readonly RULE_enumDeclaration = 11;
	public static readonly RULE_enumConstants = 12;
	public static readonly RULE_enumConstant = 13;
	public static readonly RULE_enumBodyDeclarations = 14;
	public static readonly RULE_interfaceDeclaration = 15;
	public static readonly RULE_typeList = 16;
	public static readonly RULE_classBody = 17;
	public static readonly RULE_interfaceBody = 18;
	public static readonly RULE_classBodyDeclaration = 19;
	public static readonly RULE_memberDeclaration = 20;
	public static readonly RULE_methodDeclaration = 21;
	public static readonly RULE_genericMethodDeclaration = 22;
	public static readonly RULE_constructorDeclaration = 23;
	public static readonly RULE_genericConstructorDeclaration = 24;
	public static readonly RULE_fieldDeclaration = 25;
	public static readonly RULE_propertyDeclaration = 26;
	public static readonly RULE_propertyBodyDeclaration = 27;
	public static readonly RULE_interfaceBodyDeclaration = 28;
	public static readonly RULE_interfaceMemberDeclaration = 29;
	public static readonly RULE_constDeclaration = 30;
	public static readonly RULE_constantDeclarator = 31;
	public static readonly RULE_interfaceMethodDeclaration = 32;
	public static readonly RULE_genericInterfaceMethodDeclaration = 33;
	public static readonly RULE_variableDeclarators = 34;
	public static readonly RULE_variableDeclarator = 35;
	public static readonly RULE_variableDeclaratorId = 36;
	public static readonly RULE_variableInitializer = 37;
	public static readonly RULE_arrayInitializer = 38;
	public static readonly RULE_enumConstantName = 39;
	public static readonly RULE_type_ = 40;
	public static readonly RULE_classOrInterfaceType = 41;
	public static readonly RULE_primitiveType = 42;
	public static readonly RULE_typeArguments = 43;
	public static readonly RULE_typeArgument = 44;
	public static readonly RULE_qualifiedNameList = 45;
	public static readonly RULE_formalParameters = 46;
	public static readonly RULE_formalParameterList = 47;
	public static readonly RULE_formalParameter = 48;
	public static readonly RULE_lastFormalParameter = 49;
	public static readonly RULE_methodBody = 50;
	public static readonly RULE_constructorBody = 51;
	public static readonly RULE_qualifiedName = 52;
	public static readonly RULE_literal = 53;
	public static readonly RULE_annotation = 54;
	public static readonly RULE_annotationName = 55;
	public static readonly RULE_elementValuePairs = 56;
	public static readonly RULE_elementValuePair = 57;
	public static readonly RULE_elementValue = 58;
	public static readonly RULE_elementValueArrayInitializer = 59;
	public static readonly RULE_annotationTypeDeclaration = 60;
	public static readonly RULE_annotationTypeBody = 61;
	public static readonly RULE_annotationTypeElementDeclaration = 62;
	public static readonly RULE_annotationTypeElementRest = 63;
	public static readonly RULE_annotationMethodOrConstantRest = 64;
	public static readonly RULE_annotationMethodRest = 65;
	public static readonly RULE_annotationConstantRest = 66;
	public static readonly RULE_defaultValue = 67;
	public static readonly RULE_block = 68;
	public static readonly RULE_blockStatement = 69;
	public static readonly RULE_localVariableDeclarationStatement = 70;
	public static readonly RULE_localVariableDeclaration = 71;
	public static readonly RULE_statement = 72;
	public static readonly RULE_propertyBlock = 73;
	public static readonly RULE_getter = 74;
	public static readonly RULE_setter = 75;
	public static readonly RULE_catchClause = 76;
	public static readonly RULE_catchType = 77;
	public static readonly RULE_finallyBlock = 78;
	public static readonly RULE_resourceSpecification = 79;
	public static readonly RULE_resources = 80;
	public static readonly RULE_resource = 81;
	public static readonly RULE_forControl = 82;
	public static readonly RULE_forInit = 83;
	public static readonly RULE_enhancedForControl = 84;
	public static readonly RULE_forUpdate = 85;
	public static readonly RULE_parExpression = 86;
	public static readonly RULE_expressionList = 87;
	public static readonly RULE_statementExpression = 88;
	public static readonly RULE_constantExpression = 89;
	public static readonly RULE_apexDbUpsertExpression = 90;
	public static readonly RULE_apexDbExpression = 91;
	public static readonly RULE_expression = 92;
	public static readonly RULE_primary = 93;
	public static readonly RULE_creator = 94;
	public static readonly RULE_createdName = 95;
	public static readonly RULE_innerCreator = 96;
	public static readonly RULE_arrayCreatorRest = 97;
	public static readonly RULE_mapCreatorRest = 98;
	public static readonly RULE_setCreatorRest = 99;
	public static readonly RULE_classCreatorRest = 100;
	public static readonly RULE_explicitGenericInvocation = 101;
	public static readonly RULE_nonWildcardTypeArguments = 102;
	public static readonly RULE_typeArgumentsOrDiamond = 103;
	public static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 104;
	public static readonly RULE_superSuffix = 105;
	public static readonly RULE_explicitGenericInvocationSuffix = 106;
	public static readonly RULE_arguments = 107;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration", 
		"modifier", "classOrInterfaceModifier", "variableModifier", "classDeclaration", 
		"typeParameters", "typeParameter", "typeBound", "enumDeclaration", "enumConstants", 
		"enumConstant", "enumBodyDeclarations", "interfaceDeclaration", "typeList", 
		"classBody", "interfaceBody", "classBodyDeclaration", "memberDeclaration", 
		"methodDeclaration", "genericMethodDeclaration", "constructorDeclaration", 
		"genericConstructorDeclaration", "fieldDeclaration", "propertyDeclaration", 
		"propertyBodyDeclaration", "interfaceBodyDeclaration", "interfaceMemberDeclaration", 
		"constDeclaration", "constantDeclarator", "interfaceMethodDeclaration", 
		"genericInterfaceMethodDeclaration", "variableDeclarators", "variableDeclarator", 
		"variableDeclaratorId", "variableInitializer", "arrayInitializer", "enumConstantName", 
		"type_", "classOrInterfaceType", "primitiveType", "typeArguments", "typeArgument", 
		"qualifiedNameList", "formalParameters", "formalParameterList", "formalParameter", 
		"lastFormalParameter", "methodBody", "constructorBody", "qualifiedName", 
		"literal", "annotation", "annotationName", "elementValuePairs", "elementValuePair", 
		"elementValue", "elementValueArrayInitializer", "annotationTypeDeclaration", 
		"annotationTypeBody", "annotationTypeElementDeclaration", "annotationTypeElementRest", 
		"annotationMethodOrConstantRest", "annotationMethodRest", "annotationConstantRest", 
		"defaultValue", "block", "blockStatement", "localVariableDeclarationStatement", 
		"localVariableDeclaration", "statement", "propertyBlock", "getter", "setter", 
		"catchClause", "catchType", "finallyBlock", "resourceSpecification", "resources", 
		"resource", "forControl", "forInit", "enhancedForControl", "forUpdate", 
		"parExpression", "expressionList", "statementExpression", "constantExpression", 
		"apexDbUpsertExpression", "apexDbExpression", "expression", "primary", 
		"creator", "createdName", "innerCreator", "arrayCreatorRest", "mapCreatorRest", 
		"setCreatorRest", "classCreatorRest", "explicitGenericInvocation", "nonWildcardTypeArguments", 
		"typeArgumentsOrDiamond", "nonWildcardTypeArgumentsOrDiamond", "superSuffix", 
		"explicitGenericInvocationSuffix", "arguments",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'<>'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'{'", 
		"'}'", "'['", "']'", "';'", "','", "'.'", "'='", "'>'", "'<'", "'!'", 
		"'~'", "'?'", "':'", "'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", "'++'", 
		"'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", "'%'", "'+='", 
		"'-='", "'*='", "'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", 
		"'>>>='", "'=>'", undefined, "'@'", "'...'", undefined, undefined, "'/**'", 
		undefined, "'/*'", undefined, "'''",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "SoqlLiteral", "OVERRIDE", "VIRTUAL", "SET", "GET", 
		"ABSTRACT", "BREAK", "BYTE", "CATCH", "CHAR", "CLASS", "CONST", "CONTINUE", 
		"DEFAULT", "DO", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT", 
		"FOR", "IF", "GOTO", "IMPLEMENTS", "IMPORT", "INSTANCEOF", "INT", "INTERFACE", 
		"NATIVE", "NEW", "PACKAGE", "PRIVATE", "PROTECTED", "PUBLIC", "RETURN", 
		"SHORT", "STATIC", "SUPER", "SYNCHRONIZED", "THIS", "THROW", "THROWS", 
		"TRANSIENT", "TRY", "VOID", "VOLATILE", "WHILE", "GLOBAL", "WEBSERVICE", 
		"APEX_WITH_SHARING", "APEX_WITHOUT_SHARING", "SELECT", "DB_INSERT", "DB_UPSERT", 
		"DB_UPDATE", "DB_DELETE", "DB_UNDELETE", "TESTMETHOD", "RUNAS", "IntegerLiteral", 
		"FloatingPointLiteral", "BooleanLiteral", "CharacterLiteral", "StringLiteral", 
		"NullLiteral", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", 
		"SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", 
		"COLON", "EQUAL", "LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", 
		"SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN", 
		"SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
		"MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "LAMBDA_LIKE", 
		"Identifier", "AT", "ELLIPSIS", "WS", "APEXDOC_COMMENT", "APEXDOC_COMMENT_START", 
		"COMMENT", "COMMENT_START", "LINE_COMMENT", "QUOTE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(apexParser._LITERAL_NAMES, apexParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return apexParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "apex.g4"; }

	// @Override
	public get ruleNames(): string[] { return apexParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return apexParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(apexParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, apexParser.RULE_compilationUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 216;
				this.packageDeclaration();
				}
				break;
			}
			this.state = 222;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.IMPORT) {
				{
				{
				this.state = 219;
				this.importDeclaration();
				}
				}
				this.state = 224;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.ABSTRACT) | (1 << apexParser.CLASS) | (1 << apexParser.ENUM) | (1 << apexParser.FINAL) | (1 << apexParser.INTERFACE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.SEMI || _la === apexParser.AT) {
				{
				{
				this.state = 225;
				this.typeDeclaration();
				}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 231;
			this.match(apexParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageDeclaration(): PackageDeclarationContext {
		let _localctx: PackageDeclarationContext = new PackageDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, apexParser.RULE_packageDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.AT) {
				{
				{
				this.state = 233;
				this.annotation();
				}
				}
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 239;
			this.match(apexParser.PACKAGE);
			this.state = 240;
			this.qualifiedName();
			this.state = 241;
			this.match(apexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDeclaration(): ImportDeclarationContext {
		let _localctx: ImportDeclarationContext = new ImportDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, apexParser.RULE_importDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(apexParser.IMPORT);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.STATIC) {
				{
				this.state = 244;
				this.match(apexParser.STATIC);
				}
			}

			this.state = 247;
			this.qualifiedName();
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.DOT) {
				{
				this.state = 248;
				this.match(apexParser.DOT);
				this.state = 249;
				this.match(apexParser.MUL);
				}
			}

			this.state = 252;
			this.match(apexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, apexParser.RULE_typeDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.ABSTRACT) | (1 << apexParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.AT) {
					{
					{
					this.state = 254;
					this.classOrInterfaceModifier();
					}
					}
					this.state = 259;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 260;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.ABSTRACT) | (1 << apexParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.AT) {
					{
					{
					this.state = 261;
					this.classOrInterfaceModifier();
					}
					}
					this.state = 266;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 267;
				this.enumDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.ABSTRACT) | (1 << apexParser.FINAL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.AT) {
					{
					{
					this.state = 268;
					this.classOrInterfaceModifier();
					}
					}
					this.state = 273;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 274;
				this.interfaceDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 278;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 275;
						this.classOrInterfaceModifier();
						}
						}
					}
					this.state = 280;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
				}
				this.state = 281;
				this.annotationTypeDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 282;
				this.match(apexParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, apexParser.RULE_modifier);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.OVERRIDE:
			case apexParser.VIRTUAL:
			case apexParser.ABSTRACT:
			case apexParser.FINAL:
			case apexParser.PRIVATE:
			case apexParser.PROTECTED:
			case apexParser.PUBLIC:
			case apexParser.STATIC:
			case apexParser.GLOBAL:
			case apexParser.WEBSERVICE:
			case apexParser.APEX_WITH_SHARING:
			case apexParser.APEX_WITHOUT_SHARING:
			case apexParser.TESTMETHOD:
			case apexParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 285;
				this.classOrInterfaceModifier();
				}
				break;
			case apexParser.NATIVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 286;
				this.match(apexParser.NATIVE);
				}
				break;
			case apexParser.SYNCHRONIZED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 287;
				this.match(apexParser.SYNCHRONIZED);
				}
				break;
			case apexParser.TRANSIENT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 288;
				this.match(apexParser.TRANSIENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
		let _localctx: ClassOrInterfaceModifierContext = new ClassOrInterfaceModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, apexParser.RULE_classOrInterfaceModifier);
		try {
			this.state = 305;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 291;
				this.annotation();
				}
				break;
			case apexParser.PUBLIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 292;
				this.match(apexParser.PUBLIC);
				}
				break;
			case apexParser.PROTECTED:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 293;
				this.match(apexParser.PROTECTED);
				}
				break;
			case apexParser.PRIVATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 294;
				this.match(apexParser.PRIVATE);
				}
				break;
			case apexParser.STATIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 295;
				this.match(apexParser.STATIC);
				}
				break;
			case apexParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 296;
				this.match(apexParser.ABSTRACT);
				}
				break;
			case apexParser.FINAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 297;
				this.match(apexParser.FINAL);
				}
				break;
			case apexParser.GLOBAL:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 298;
				this.match(apexParser.GLOBAL);
				}
				break;
			case apexParser.WEBSERVICE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 299;
				this.match(apexParser.WEBSERVICE);
				}
				break;
			case apexParser.OVERRIDE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 300;
				this.match(apexParser.OVERRIDE);
				}
				break;
			case apexParser.VIRTUAL:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 301;
				this.match(apexParser.VIRTUAL);
				}
				break;
			case apexParser.TESTMETHOD:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 302;
				this.match(apexParser.TESTMETHOD);
				}
				break;
			case apexParser.APEX_WITH_SHARING:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 303;
				this.match(apexParser.APEX_WITH_SHARING);
				}
				break;
			case apexParser.APEX_WITHOUT_SHARING:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 304;
				this.match(apexParser.APEX_WITHOUT_SHARING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableModifier(): VariableModifierContext {
		let _localctx: VariableModifierContext = new VariableModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, apexParser.RULE_variableModifier);
		try {
			this.state = 309;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.FINAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 307;
				this.match(apexParser.FINAL);
				}
				break;
			case apexParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 308;
				this.annotation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, apexParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.match(apexParser.CLASS);
			this.state = 312;
			this.match(apexParser.Identifier);
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.LT) {
				{
				this.state = 313;
				this.typeParameters();
				}
			}

			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.EXTENDS) {
				{
				this.state = 316;
				this.match(apexParser.EXTENDS);
				this.state = 317;
				this.type_();
				}
			}

			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.IMPLEMENTS) {
				{
				this.state = 320;
				this.match(apexParser.IMPLEMENTS);
				this.state = 321;
				this.typeList();
				}
			}

			this.state = 324;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, apexParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this.match(apexParser.LT);
			this.state = 327;
			this.typeParameter();
			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.COMMA) {
				{
				{
				this.state = 328;
				this.match(apexParser.COMMA);
				this.state = 329;
				this.typeParameter();
				}
				}
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 335;
			this.match(apexParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, apexParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(apexParser.Identifier);
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.EXTENDS) {
				{
				this.state = 338;
				this.match(apexParser.EXTENDS);
				this.state = 339;
				this.typeBound();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBound(): TypeBoundContext {
		let _localctx: TypeBoundContext = new TypeBoundContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, apexParser.RULE_typeBound);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.type_();
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.BITAND) {
				{
				{
				this.state = 343;
				this.match(apexParser.BITAND);
				this.state = 344;
				this.type_();
				}
				}
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, apexParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this.match(apexParser.ENUM);
			this.state = 351;
			this.match(apexParser.Identifier);
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.IMPLEMENTS) {
				{
				this.state = 352;
				this.match(apexParser.IMPLEMENTS);
				this.state = 353;
				this.typeList();
				}
			}

			this.state = 356;
			this.match(apexParser.LBRACE);
			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.Identifier || _la === apexParser.AT) {
				{
				this.state = 357;
				this.enumConstants();
				}
			}

			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.COMMA) {
				{
				this.state = 360;
				this.match(apexParser.COMMA);
				}
			}

			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.SEMI) {
				{
				this.state = 363;
				this.enumBodyDeclarations();
				}
			}

			this.state = 366;
			this.match(apexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstants(): EnumConstantsContext {
		let _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, apexParser.RULE_enumConstants);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.enumConstant();
			this.state = 373;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 369;
					this.match(apexParser.COMMA);
					this.state = 370;
					this.enumConstant();
					}
					}
				}
				this.state = 375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstant(): EnumConstantContext {
		let _localctx: EnumConstantContext = new EnumConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, apexParser.RULE_enumConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.AT) {
				{
				{
				this.state = 376;
				this.annotation();
				}
				}
				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 382;
			this.match(apexParser.Identifier);
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.LPAREN) {
				{
				this.state = 383;
				this.arguments();
				}
			}

			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.LBRACE) {
				{
				this.state = 386;
				this.classBody();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumBodyDeclarations(): EnumBodyDeclarationsContext {
		let _localctx: EnumBodyDeclarationsContext = new EnumBodyDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, apexParser.RULE_enumBodyDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this.match(apexParser.SEMI);
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.SET) | (1 << apexParser.ABSTRACT) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.CLASS) | (1 << apexParser.ENUM) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.INT) | (1 << apexParser.INTERFACE) | (1 << apexParser.NATIVE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.SHORT - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.SYNCHRONIZED - 34)) | (1 << (apexParser.TRANSIENT - 34)) | (1 << (apexParser.VOID - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (apexParser.LBRACE - 70)) | (1 << (apexParser.SEMI - 70)) | (1 << (apexParser.LT - 70)))) !== 0) || _la === apexParser.Identifier || _la === apexParser.AT) {
				{
				{
				this.state = 390;
				this.classBodyDeclaration();
				}
				}
				this.state = 395;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, apexParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(apexParser.INTERFACE);
			this.state = 397;
			this.match(apexParser.Identifier);
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.LT) {
				{
				this.state = 398;
				this.typeParameters();
				}
			}

			this.state = 403;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.EXTENDS) {
				{
				this.state = 401;
				this.match(apexParser.EXTENDS);
				this.state = 402;
				this.typeList();
				}
			}

			this.state = 405;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, apexParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.type_();
			this.state = 412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.COMMA) {
				{
				{
				this.state = 408;
				this.match(apexParser.COMMA);
				this.state = 409;
				this.type_();
				}
				}
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, apexParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(apexParser.LBRACE);
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.SET) | (1 << apexParser.ABSTRACT) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.CLASS) | (1 << apexParser.ENUM) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.INT) | (1 << apexParser.INTERFACE) | (1 << apexParser.NATIVE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.SHORT - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.SYNCHRONIZED - 34)) | (1 << (apexParser.TRANSIENT - 34)) | (1 << (apexParser.VOID - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (apexParser.LBRACE - 70)) | (1 << (apexParser.SEMI - 70)) | (1 << (apexParser.LT - 70)))) !== 0) || _la === apexParser.Identifier || _la === apexParser.AT) {
				{
				{
				this.state = 416;
				this.classBodyDeclaration();
				}
				}
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 422;
			this.match(apexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, apexParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(apexParser.LBRACE);
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.SET) | (1 << apexParser.ABSTRACT) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.CLASS) | (1 << apexParser.ENUM) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.INT) | (1 << apexParser.INTERFACE) | (1 << apexParser.NATIVE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.SHORT - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.SYNCHRONIZED - 34)) | (1 << (apexParser.TRANSIENT - 34)) | (1 << (apexParser.VOID - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.SEMI || _la === apexParser.LT || _la === apexParser.Identifier || _la === apexParser.AT) {
				{
				{
				this.state = 425;
				this.interfaceBodyDeclaration();
				}
				}
				this.state = 430;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 431;
			this.match(apexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, apexParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 433;
				this.match(apexParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === apexParser.STATIC) {
					{
					this.state = 434;
					this.match(apexParser.STATIC);
					}
				}

				this.state = 437;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 441;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 438;
						this.modifier();
						}
						}
					}
					this.state = 443;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				}
				this.state = 444;
				this.memberDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclaration(): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, apexParser.RULE_memberDeclaration);
		try {
			this.state = 457;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 447;
				this.methodDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 448;
				this.genericMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 449;
				this.fieldDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 450;
				this.constructorDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 451;
				this.genericConstructorDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 452;
				this.interfaceDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 453;
				this.annotationTypeDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 454;
				this.classDeclaration();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 455;
				this.enumDeclaration();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 456;
				this.propertyDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, apexParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.OVERRIDE) {
				{
				this.state = 459;
				this.match(apexParser.OVERRIDE);
				}
			}

			this.state = 464;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.SET:
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.SHORT:
			case apexParser.Identifier:
				{
				this.state = 462;
				this.type_();
				}
				break;
			case apexParser.VOID:
				{
				this.state = 463;
				this.match(apexParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 466;
			this.match(apexParser.Identifier);
			this.state = 467;
			this.formalParameters();
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.LBRACK) {
				{
				{
				this.state = 468;
				this.match(apexParser.LBRACK);
				this.state = 469;
				this.match(apexParser.RBRACK);
				}
				}
				this.state = 474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.THROWS) {
				{
				this.state = 475;
				this.match(apexParser.THROWS);
				this.state = 476;
				this.qualifiedNameList();
				}
			}

			this.state = 481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.LBRACE:
				{
				this.state = 479;
				this.methodBody();
				}
				break;
			case apexParser.SEMI:
				{
				this.state = 480;
				this.match(apexParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericMethodDeclaration(): GenericMethodDeclarationContext {
		let _localctx: GenericMethodDeclarationContext = new GenericMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, apexParser.RULE_genericMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.typeParameters();
			this.state = 484;
			this.methodDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, apexParser.RULE_constructorDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.match(apexParser.Identifier);
			this.state = 487;
			this.formalParameters();
			this.state = 490;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.THROWS) {
				{
				this.state = 488;
				this.match(apexParser.THROWS);
				this.state = 489;
				this.qualifiedNameList();
				}
			}

			this.state = 492;
			this.constructorBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext {
		let _localctx: GenericConstructorDeclarationContext = new GenericConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, apexParser.RULE_genericConstructorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 494;
			this.typeParameters();
			this.state = 495;
			this.constructorDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, apexParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.type_();
			this.state = 498;
			this.variableDeclarators();
			this.state = 499;
			this.match(apexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyDeclaration(): PropertyDeclarationContext {
		let _localctx: PropertyDeclarationContext = new PropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, apexParser.RULE_propertyDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			this.type_();
			this.state = 502;
			this.variableDeclarators();
			this.state = 503;
			this.propertyBodyDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyBodyDeclaration(): PropertyBodyDeclarationContext {
		let _localctx: PropertyBodyDeclarationContext = new PropertyBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, apexParser.RULE_propertyBodyDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this.match(apexParser.LBRACE);
			this.state = 506;
			this.propertyBlock();
			this.state = 508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.SET) | (1 << apexParser.GET) | (1 << apexParser.ABSTRACT) | (1 << apexParser.FINAL) | (1 << apexParser.NATIVE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.SYNCHRONIZED - 34)) | (1 << (apexParser.TRANSIENT - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.AT) {
				{
				this.state = 507;
				this.propertyBlock();
				}
			}

			this.state = 510;
			this.match(apexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext {
		let _localctx: InterfaceBodyDeclarationContext = new InterfaceBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, apexParser.RULE_interfaceBodyDeclaration);
		try {
			let _alt: number;
			this.state = 520;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.OVERRIDE:
			case apexParser.VIRTUAL:
			case apexParser.SET:
			case apexParser.ABSTRACT:
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.CLASS:
			case apexParser.ENUM:
			case apexParser.FINAL:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.INTERFACE:
			case apexParser.NATIVE:
			case apexParser.PRIVATE:
			case apexParser.PROTECTED:
			case apexParser.PUBLIC:
			case apexParser.SHORT:
			case apexParser.STATIC:
			case apexParser.SYNCHRONIZED:
			case apexParser.TRANSIENT:
			case apexParser.VOID:
			case apexParser.GLOBAL:
			case apexParser.WEBSERVICE:
			case apexParser.APEX_WITH_SHARING:
			case apexParser.APEX_WITHOUT_SHARING:
			case apexParser.TESTMETHOD:
			case apexParser.LT:
			case apexParser.Identifier:
			case apexParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 515;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 512;
						this.modifier();
						}
						}
					}
					this.state = 517;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
				}
				this.state = 518;
				this.interfaceMemberDeclaration();
				}
				break;
			case apexParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 519;
				this.match(apexParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
		let _localctx: InterfaceMemberDeclarationContext = new InterfaceMemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, apexParser.RULE_interfaceMemberDeclaration);
		try {
			this.state = 529;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 522;
				this.constDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 523;
				this.interfaceMethodDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 524;
				this.genericInterfaceMethodDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 525;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 526;
				this.annotationTypeDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 527;
				this.classDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 528;
				this.enumDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constDeclaration(): ConstDeclarationContext {
		let _localctx: ConstDeclarationContext = new ConstDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, apexParser.RULE_constDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this.type_();
			this.state = 532;
			this.constantDeclarator();
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.COMMA) {
				{
				{
				this.state = 533;
				this.match(apexParser.COMMA);
				this.state = 534;
				this.constantDeclarator();
				}
				}
				this.state = 539;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 540;
			this.match(apexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantDeclarator(): ConstantDeclaratorContext {
		let _localctx: ConstantDeclaratorContext = new ConstantDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, apexParser.RULE_constantDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.match(apexParser.Identifier);
			this.state = 547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.LBRACK) {
				{
				{
				this.state = 543;
				this.match(apexParser.LBRACK);
				this.state = 544;
				this.match(apexParser.RBRACK);
				}
				}
				this.state = 549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 550;
			this.match(apexParser.ASSIGN);
			this.state = 551;
			this.variableInitializer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, apexParser.RULE_interfaceMethodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.SET:
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.SHORT:
			case apexParser.Identifier:
				{
				this.state = 553;
				this.type_();
				}
				break;
			case apexParser.VOID:
				{
				this.state = 554;
				this.match(apexParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 557;
			this.match(apexParser.Identifier);
			this.state = 558;
			this.formalParameters();
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.LBRACK) {
				{
				{
				this.state = 559;
				this.match(apexParser.LBRACK);
				this.state = 560;
				this.match(apexParser.RBRACK);
				}
				}
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.THROWS) {
				{
				this.state = 566;
				this.match(apexParser.THROWS);
				this.state = 567;
				this.qualifiedNameList();
				}
			}

			this.state = 570;
			this.match(apexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext {
		let _localctx: GenericInterfaceMethodDeclarationContext = new GenericInterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, apexParser.RULE_genericInterfaceMethodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 572;
			this.typeParameters();
			this.state = 573;
			this.interfaceMethodDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarators(): VariableDeclaratorsContext {
		let _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, apexParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 575;
			this.variableDeclarator();
			this.state = 580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.COMMA) {
				{
				{
				this.state = 576;
				this.match(apexParser.COMMA);
				this.state = 577;
				this.variableDeclarator();
				}
				}
				this.state = 582;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, apexParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			this.variableDeclaratorId();
			this.state = 586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.ASSIGN) {
				{
				this.state = 584;
				this.match(apexParser.ASSIGN);
				this.state = 585;
				this.variableInitializer();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		let _localctx: VariableDeclaratorIdContext = new VariableDeclaratorIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, apexParser.RULE_variableDeclaratorId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 588;
			this.match(apexParser.Identifier);
			this.state = 593;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.LBRACK) {
				{
				{
				this.state = 589;
				this.match(apexParser.LBRACK);
				this.state = 590;
				this.match(apexParser.RBRACK);
				}
				}
				this.state = 595;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableInitializer(): VariableInitializerContext {
		let _localctx: VariableInitializerContext = new VariableInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, apexParser.RULE_variableInitializer);
		try {
			this.state = 598;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 596;
				this.arrayInitializer();
				}
				break;
			case apexParser.SoqlLiteral:
			case apexParser.SET:
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.NEW:
			case apexParser.SHORT:
			case apexParser.SUPER:
			case apexParser.THIS:
			case apexParser.VOID:
			case apexParser.IntegerLiteral:
			case apexParser.FloatingPointLiteral:
			case apexParser.BooleanLiteral:
			case apexParser.CharacterLiteral:
			case apexParser.StringLiteral:
			case apexParser.NullLiteral:
			case apexParser.LPAREN:
			case apexParser.LT:
			case apexParser.BANG:
			case apexParser.TILDE:
			case apexParser.INC:
			case apexParser.DEC:
			case apexParser.ADD:
			case apexParser.SUB:
			case apexParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 597;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, apexParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
			this.match(apexParser.LBRACE);
			this.state = 612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LBRACE - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
				{
				this.state = 601;
				this.variableInitializer();
				this.state = 606;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 602;
						this.match(apexParser.COMMA);
						this.state = 603;
						this.variableInitializer();
						}
						}
					}
					this.state = 608;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
				}
				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === apexParser.COMMA) {
					{
					this.state = 609;
					this.match(apexParser.COMMA);
					}
				}

				}
			}

			this.state = 614;
			this.match(apexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstantName(): EnumConstantNameContext {
		let _localctx: EnumConstantNameContext = new EnumConstantNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, apexParser.RULE_enumConstantName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			this.match(apexParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 80, apexParser.RULE_type_);
		try {
			let _alt: number;
			this.state = 634;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.SET:
			case apexParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 618;
				this.classOrInterfaceType();
				this.state = 623;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 619;
						this.match(apexParser.LBRACK);
						this.state = 620;
						this.match(apexParser.RBRACK);
						}
						}
					}
					this.state = 625;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
				}
				}
				break;
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.SHORT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 626;
				this.primitiveType();
				this.state = 631;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 627;
						this.match(apexParser.LBRACK);
						this.state = 628;
						this.match(apexParser.RBRACK);
						}
						}
					}
					this.state = 633;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		let _localctx: ClassOrInterfaceTypeContext = new ClassOrInterfaceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, apexParser.RULE_classOrInterfaceType);
		try {
			let _alt: number;
			this.state = 652;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 636;
				this.match(apexParser.Identifier);
				this.state = 638;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
				case 1:
					{
					this.state = 637;
					this.typeArguments();
					}
					break;
				}
				this.state = 647;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 640;
						this.match(apexParser.DOT);
						this.state = 641;
						this.match(apexParser.Identifier);
						this.state = 643;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
						case 1:
							{
							this.state = 642;
							this.typeArguments();
							}
							break;
						}
						}
						}
					}
					this.state = 649;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				}
				}
				break;
			case apexParser.SET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 650;
				this.match(apexParser.SET);
				this.state = 651;
				this.typeArguments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, apexParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			_la = this._input.LA(1);
			if (!(((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (apexParser.BYTE - 9)) | (1 << (apexParser.CHAR - 9)) | (1 << (apexParser.FLOAT - 9)) | (1 << (apexParser.INT - 9)) | (1 << (apexParser.SHORT - 9)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, apexParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.match(apexParser.LT);
			this.state = 657;
			this.typeArgument();
			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.COMMA) {
				{
				{
				this.state = 658;
				this.match(apexParser.COMMA);
				this.state = 659;
				this.typeArgument();
				}
				}
				this.state = 664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 665;
			this.match(apexParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgument(): TypeArgumentContext {
		let _localctx: TypeArgumentContext = new TypeArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, apexParser.RULE_typeArgument);
		let _la: number;
		try {
			this.state = 673;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.SET:
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.SHORT:
			case apexParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 667;
				this.type_();
				}
				break;
			case apexParser.QUESTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 668;
				this.match(apexParser.QUESTION);
				this.state = 671;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === apexParser.EXTENDS || _la === apexParser.SUPER) {
					{
					this.state = 669;
					_la = this._input.LA(1);
					if (!(_la === apexParser.EXTENDS || _la === apexParser.SUPER)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 670;
					this.type_();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedNameList(): QualifiedNameListContext {
		let _localctx: QualifiedNameListContext = new QualifiedNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, apexParser.RULE_qualifiedNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 675;
			this.qualifiedName();
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.COMMA) {
				{
				{
				this.state = 676;
				this.match(apexParser.COMMA);
				this.state = 677;
				this.qualifiedName();
				}
				}
				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, apexParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 683;
			this.match(apexParser.LPAREN);
			this.state = 685;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || _la === apexParser.SHORT || _la === apexParser.Identifier || _la === apexParser.AT) {
				{
				this.state = 684;
				this.formalParameterList();
				}
			}

			this.state = 687;
			this.match(apexParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, apexParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 702;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 689;
				this.formalParameter();
				this.state = 694;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 690;
						this.match(apexParser.COMMA);
						this.state = 691;
						this.formalParameter();
						}
						}
					}
					this.state = 696;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				}
				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === apexParser.COMMA) {
					{
					this.state = 697;
					this.match(apexParser.COMMA);
					this.state = 698;
					this.lastFormalParameter();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 701;
				this.lastFormalParameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, apexParser.RULE_formalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.FINAL || _la === apexParser.AT) {
				{
				{
				this.state = 704;
				this.variableModifier();
				}
				}
				this.state = 709;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 710;
			this.type_();
			this.state = 711;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lastFormalParameter(): LastFormalParameterContext {
		let _localctx: LastFormalParameterContext = new LastFormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, apexParser.RULE_lastFormalParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.FINAL || _la === apexParser.AT) {
				{
				{
				this.state = 713;
				this.variableModifier();
				}
				}
				this.state = 718;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 719;
			this.type_();
			this.state = 720;
			this.match(apexParser.ELLIPSIS);
			this.state = 721;
			this.variableDeclaratorId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodBody(): MethodBodyContext {
		let _localctx: MethodBodyContext = new MethodBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, apexParser.RULE_methodBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorBody(): ConstructorBodyContext {
		let _localctx: ConstructorBodyContext = new ConstructorBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, apexParser.RULE_constructorBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 725;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, apexParser.RULE_qualifiedName);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 727;
			this.match(apexParser.Identifier);
			this.state = 732;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 728;
					this.match(apexParser.DOT);
					this.state = 729;
					this.match(apexParser.Identifier);
					}
					}
				}
				this.state = 734;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 77, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, apexParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 735;
			_la = this._input.LA(1);
			if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (apexParser.IntegerLiteral - 62)) | (1 << (apexParser.FloatingPointLiteral - 62)) | (1 << (apexParser.BooleanLiteral - 62)) | (1 << (apexParser.CharacterLiteral - 62)) | (1 << (apexParser.StringLiteral - 62)) | (1 << (apexParser.NullLiteral - 62)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, apexParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 737;
			this.match(apexParser.AT);
			this.state = 738;
			this.annotationName();
			this.state = 745;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.LPAREN) {
				{
				this.state = 739;
				this.match(apexParser.LPAREN);
				this.state = 742;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
				case 1:
					{
					this.state = 740;
					this.elementValuePairs();
					}
					break;

				case 2:
					{
					this.state = 741;
					this.elementValue();
					}
					break;
				}
				this.state = 744;
				this.match(apexParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationName(): AnnotationNameContext {
		let _localctx: AnnotationNameContext = new AnnotationNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, apexParser.RULE_annotationName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairs(): ElementValuePairsContext {
		let _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, apexParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 749;
			this.elementValuePair();
			this.state = 756;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.COMMA || _la === apexParser.Identifier) {
				{
				{
				this.state = 751;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === apexParser.COMMA) {
					{
					this.state = 750;
					this.match(apexParser.COMMA);
					}
				}

				this.state = 753;
				this.elementValuePair();
				}
				}
				this.state = 758;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, apexParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this.match(apexParser.Identifier);
			this.state = 760;
			this.match(apexParser.ASSIGN);
			this.state = 761;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, apexParser.RULE_elementValue);
		try {
			this.state = 766;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.SoqlLiteral:
			case apexParser.SET:
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.NEW:
			case apexParser.SHORT:
			case apexParser.SUPER:
			case apexParser.THIS:
			case apexParser.VOID:
			case apexParser.IntegerLiteral:
			case apexParser.FloatingPointLiteral:
			case apexParser.BooleanLiteral:
			case apexParser.CharacterLiteral:
			case apexParser.StringLiteral:
			case apexParser.NullLiteral:
			case apexParser.LPAREN:
			case apexParser.LT:
			case apexParser.BANG:
			case apexParser.TILDE:
			case apexParser.INC:
			case apexParser.DEC:
			case apexParser.ADD:
			case apexParser.SUB:
			case apexParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 763;
				this.expression(0);
				}
				break;
			case apexParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 764;
				this.annotation();
				}
				break;
			case apexParser.LBRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 765;
				this.elementValueArrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, apexParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			this.match(apexParser.LBRACE);
			this.state = 777;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LBRACE - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier || _la === apexParser.AT) {
				{
				this.state = 769;
				this.elementValue();
				this.state = 774;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 770;
						this.match(apexParser.COMMA);
						this.state = 771;
						this.elementValue();
						}
						}
					}
					this.state = 776;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				}
				}
			}

			this.state = 780;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.COMMA) {
				{
				this.state = 779;
				this.match(apexParser.COMMA);
				}
			}

			this.state = 782;
			this.match(apexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
		let _localctx: AnnotationTypeDeclarationContext = new AnnotationTypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, apexParser.RULE_annotationTypeDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 784;
			this.match(apexParser.AT);
			this.state = 785;
			this.match(apexParser.INTERFACE);
			this.state = 786;
			this.match(apexParser.Identifier);
			this.state = 787;
			this.annotationTypeBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeBody(): AnnotationTypeBodyContext {
		let _localctx: AnnotationTypeBodyContext = new AnnotationTypeBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, apexParser.RULE_annotationTypeBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.match(apexParser.LBRACE);
			this.state = 793;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.SET) | (1 << apexParser.ABSTRACT) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.CLASS) | (1 << apexParser.ENUM) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.INT) | (1 << apexParser.INTERFACE) | (1 << apexParser.NATIVE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.SHORT - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.SYNCHRONIZED - 34)) | (1 << (apexParser.TRANSIENT - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.SEMI || _la === apexParser.Identifier || _la === apexParser.AT) {
				{
				{
				this.state = 790;
				this.annotationTypeElementDeclaration();
				}
				}
				this.state = 795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 796;
			this.match(apexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
		let _localctx: AnnotationTypeElementDeclarationContext = new AnnotationTypeElementDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, apexParser.RULE_annotationTypeElementDeclaration);
		try {
			let _alt: number;
			this.state = 806;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.OVERRIDE:
			case apexParser.VIRTUAL:
			case apexParser.SET:
			case apexParser.ABSTRACT:
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.CLASS:
			case apexParser.ENUM:
			case apexParser.FINAL:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.INTERFACE:
			case apexParser.NATIVE:
			case apexParser.PRIVATE:
			case apexParser.PROTECTED:
			case apexParser.PUBLIC:
			case apexParser.SHORT:
			case apexParser.STATIC:
			case apexParser.SYNCHRONIZED:
			case apexParser.TRANSIENT:
			case apexParser.GLOBAL:
			case apexParser.WEBSERVICE:
			case apexParser.APEX_WITH_SHARING:
			case apexParser.APEX_WITHOUT_SHARING:
			case apexParser.TESTMETHOD:
			case apexParser.Identifier:
			case apexParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 801;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 798;
						this.modifier();
						}
						}
					}
					this.state = 803;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				}
				this.state = 804;
				this.annotationTypeElementRest();
				}
				break;
			case apexParser.SEMI:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 805;
				this.match(apexParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationTypeElementRest(): AnnotationTypeElementRestContext {
		let _localctx: AnnotationTypeElementRestContext = new AnnotationTypeElementRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, apexParser.RULE_annotationTypeElementRest);
		try {
			this.state = 828;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.SET:
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.SHORT:
			case apexParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 808;
				this.type_();
				this.state = 809;
				this.annotationMethodOrConstantRest();
				this.state = 810;
				this.match(apexParser.SEMI);
				}
				break;
			case apexParser.CLASS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 812;
				this.classDeclaration();
				this.state = 814;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 813;
					this.match(apexParser.SEMI);
					}
					break;
				}
				}
				break;
			case apexParser.INTERFACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 816;
				this.interfaceDeclaration();
				this.state = 818;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 817;
					this.match(apexParser.SEMI);
					}
					break;
				}
				}
				break;
			case apexParser.ENUM:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 820;
				this.enumDeclaration();
				this.state = 822;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
				case 1:
					{
					this.state = 821;
					this.match(apexParser.SEMI);
					}
					break;
				}
				}
				break;
			case apexParser.AT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 824;
				this.annotationTypeDeclaration();
				this.state = 826;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
				case 1:
					{
					this.state = 825;
					this.match(apexParser.SEMI);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
		let _localctx: AnnotationMethodOrConstantRestContext = new AnnotationMethodOrConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, apexParser.RULE_annotationMethodOrConstantRest);
		try {
			this.state = 832;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 830;
				this.annotationMethodRest();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 831;
				this.annotationConstantRest();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationMethodRest(): AnnotationMethodRestContext {
		let _localctx: AnnotationMethodRestContext = new AnnotationMethodRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, apexParser.RULE_annotationMethodRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 834;
			this.match(apexParser.Identifier);
			this.state = 835;
			this.match(apexParser.LPAREN);
			this.state = 836;
			this.match(apexParser.RPAREN);
			this.state = 838;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.DEFAULT) {
				{
				this.state = 837;
				this.defaultValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationConstantRest(): AnnotationConstantRestContext {
		let _localctx: AnnotationConstantRestContext = new AnnotationConstantRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, apexParser.RULE_annotationConstantRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, apexParser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 842;
			this.match(apexParser.DEFAULT);
			this.state = 843;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, apexParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			this.match(apexParser.LBRACE);
			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.SET) | (1 << apexParser.ABSTRACT) | (1 << apexParser.BREAK) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.CLASS) | (1 << apexParser.CONTINUE) | (1 << apexParser.DO) | (1 << apexParser.ENUM) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.FOR) | (1 << apexParser.IF) | (1 << apexParser.INT) | (1 << apexParser.INTERFACE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.PRIVATE - 32)) | (1 << (apexParser.PROTECTED - 32)) | (1 << (apexParser.PUBLIC - 32)) | (1 << (apexParser.RETURN - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.STATIC - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.THROW - 32)) | (1 << (apexParser.TRY - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.WHILE - 32)) | (1 << (apexParser.GLOBAL - 32)) | (1 << (apexParser.WEBSERVICE - 32)) | (1 << (apexParser.APEX_WITH_SHARING - 32)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 32)) | (1 << (apexParser.DB_INSERT - 32)) | (1 << (apexParser.DB_UPSERT - 32)) | (1 << (apexParser.DB_UPDATE - 32)) | (1 << (apexParser.DB_DELETE - 32)) | (1 << (apexParser.DB_UNDELETE - 32)) | (1 << (apexParser.TESTMETHOD - 32)) | (1 << (apexParser.RUNAS - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LBRACE - 64)) | (1 << (apexParser.SEMI - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier || _la === apexParser.AT) {
				{
				{
				this.state = 846;
				this.blockStatement();
				}
				}
				this.state = 851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 852;
			this.match(apexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStatement(): BlockStatementContext {
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, apexParser.RULE_blockStatement);
		try {
			this.state = 857;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 854;
				this.localVariableDeclarationStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 855;
				this.statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 856;
				this.typeDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let _localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, apexParser.RULE_localVariableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 859;
			this.localVariableDeclaration();
			this.state = 860;
			this.match(apexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, apexParser.RULE_localVariableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.FINAL || _la === apexParser.AT) {
				{
				{
				this.state = 862;
				this.variableModifier();
				}
				}
				this.state = 867;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 868;
			this.type_();
			this.state = 869;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, apexParser.RULE_statement);
		let _la: number;
		try {
			this.state = 955;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 871;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 872;
				this.match(apexParser.IF);
				this.state = 873;
				this.parExpression();
				this.state = 874;
				this.statement();
				this.state = 877;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 875;
					this.match(apexParser.ELSE);
					this.state = 876;
					this.statement();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 879;
				this.match(apexParser.FOR);
				this.state = 880;
				this.match(apexParser.LPAREN);
				this.state = 881;
				this.forControl();
				this.state = 882;
				this.match(apexParser.RPAREN);
				this.state = 883;
				this.statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 885;
				this.match(apexParser.WHILE);
				this.state = 886;
				this.parExpression();
				this.state = 887;
				this.statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 889;
				this.match(apexParser.DO);
				this.state = 890;
				this.statement();
				this.state = 891;
				this.match(apexParser.WHILE);
				this.state = 892;
				this.parExpression();
				this.state = 893;
				this.match(apexParser.SEMI);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 895;
				this.match(apexParser.RUNAS);
				this.state = 896;
				this.match(apexParser.LPAREN);
				this.state = 897;
				this.expression(0);
				this.state = 898;
				this.match(apexParser.RPAREN);
				this.state = 899;
				this.statement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 901;
				this.match(apexParser.TRY);
				this.state = 902;
				this.block();
				this.state = 912;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case apexParser.CATCH:
					{
					this.state = 904;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 903;
						this.catchClause();
						}
						}
						this.state = 906;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === apexParser.CATCH);
					this.state = 909;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === apexParser.FINALLY) {
						{
						this.state = 908;
						this.finallyBlock();
						}
					}

					}
					break;
				case apexParser.FINALLY:
					{
					this.state = 911;
					this.finallyBlock();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 914;
				this.match(apexParser.TRY);
				this.state = 915;
				this.resourceSpecification();
				this.state = 916;
				this.block();
				this.state = 920;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === apexParser.CATCH) {
					{
					{
					this.state = 917;
					this.catchClause();
					}
					}
					this.state = 922;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 924;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === apexParser.FINALLY) {
					{
					this.state = 923;
					this.finallyBlock();
					}
				}

				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 926;
				this.match(apexParser.RETURN);
				this.state = 928;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
					{
					this.state = 927;
					this.expression(0);
					}
				}

				this.state = 930;
				this.match(apexParser.SEMI);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 931;
				this.match(apexParser.THROW);
				this.state = 932;
				this.expression(0);
				this.state = 933;
				this.match(apexParser.SEMI);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 935;
				this.match(apexParser.BREAK);
				this.state = 937;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === apexParser.Identifier) {
					{
					this.state = 936;
					this.match(apexParser.Identifier);
					}
				}

				this.state = 939;
				this.match(apexParser.SEMI);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 940;
				this.match(apexParser.CONTINUE);
				this.state = 942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === apexParser.Identifier) {
					{
					this.state = 941;
					this.match(apexParser.Identifier);
					}
				}

				this.state = 944;
				this.match(apexParser.SEMI);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 945;
				this.match(apexParser.SEMI);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 946;
				this.statementExpression();
				this.state = 947;
				this.match(apexParser.SEMI);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 949;
				this.match(apexParser.Identifier);
				this.state = 950;
				this.match(apexParser.COLON);
				this.state = 951;
				this.statement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 952;
				this.apexDbExpression();
				this.state = 953;
				this.match(apexParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyBlock(): PropertyBlockContext {
		let _localctx: PropertyBlockContext = new PropertyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, apexParser.RULE_propertyBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 960;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.OVERRIDE) | (1 << apexParser.VIRTUAL) | (1 << apexParser.ABSTRACT) | (1 << apexParser.FINAL) | (1 << apexParser.NATIVE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (apexParser.PRIVATE - 34)) | (1 << (apexParser.PROTECTED - 34)) | (1 << (apexParser.PUBLIC - 34)) | (1 << (apexParser.STATIC - 34)) | (1 << (apexParser.SYNCHRONIZED - 34)) | (1 << (apexParser.TRANSIENT - 34)) | (1 << (apexParser.GLOBAL - 34)) | (1 << (apexParser.WEBSERVICE - 34)) | (1 << (apexParser.APEX_WITH_SHARING - 34)) | (1 << (apexParser.APEX_WITHOUT_SHARING - 34)) | (1 << (apexParser.TESTMETHOD - 34)))) !== 0) || _la === apexParser.AT) {
				{
				{
				this.state = 957;
				this.modifier();
				}
				}
				this.state = 962;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 965;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.GET:
				{
				this.state = 963;
				this.getter();
				}
				break;
			case apexParser.SET:
				{
				this.state = 964;
				this.setter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getter(): GetterContext {
		let _localctx: GetterContext = new GetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, apexParser.RULE_getter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 967;
			this.match(apexParser.GET);
			this.state = 970;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.SEMI:
				{
				this.state = 968;
				this.match(apexParser.SEMI);
				}
				break;
			case apexParser.LBRACE:
				{
				this.state = 969;
				this.methodBody();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setter(): SetterContext {
		let _localctx: SetterContext = new SetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, apexParser.RULE_setter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 972;
			this.match(apexParser.SET);
			this.state = 975;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.SEMI:
				{
				this.state = 973;
				this.match(apexParser.SEMI);
				}
				break;
			case apexParser.LBRACE:
				{
				this.state = 974;
				this.methodBody();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, apexParser.RULE_catchClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 977;
			this.match(apexParser.CATCH);
			this.state = 978;
			this.match(apexParser.LPAREN);
			this.state = 982;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.FINAL || _la === apexParser.AT) {
				{
				{
				this.state = 979;
				this.variableModifier();
				}
				}
				this.state = 984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 985;
			this.catchType();
			this.state = 986;
			this.match(apexParser.Identifier);
			this.state = 987;
			this.match(apexParser.RPAREN);
			this.state = 988;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchType(): CatchTypeContext {
		let _localctx: CatchTypeContext = new CatchTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, apexParser.RULE_catchType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 990;
			this.qualifiedName();
			this.state = 995;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.BITOR) {
				{
				{
				this.state = 991;
				this.match(apexParser.BITOR);
				this.state = 992;
				this.qualifiedName();
				}
				}
				this.state = 997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, apexParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 998;
			this.match(apexParser.FINALLY);
			this.state = 999;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resourceSpecification(): ResourceSpecificationContext {
		let _localctx: ResourceSpecificationContext = new ResourceSpecificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, apexParser.RULE_resourceSpecification);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1001;
			this.match(apexParser.LPAREN);
			this.state = 1002;
			this.resources();
			this.state = 1004;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.SEMI) {
				{
				this.state = 1003;
				this.match(apexParser.SEMI);
				}
			}

			this.state = 1006;
			this.match(apexParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resources(): ResourcesContext {
		let _localctx: ResourcesContext = new ResourcesContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, apexParser.RULE_resources);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1008;
			this.resource();
			this.state = 1013;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1009;
					this.match(apexParser.SEMI);
					this.state = 1010;
					this.resource();
					}
					}
				}
				this.state = 1015;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resource(): ResourceContext {
		let _localctx: ResourceContext = new ResourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, apexParser.RULE_resource);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1019;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.FINAL || _la === apexParser.AT) {
				{
				{
				this.state = 1016;
				this.variableModifier();
				}
				}
				this.state = 1021;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1022;
			this.classOrInterfaceType();
			this.state = 1023;
			this.variableDeclaratorId();
			this.state = 1024;
			this.match(apexParser.ASSIGN);
			this.state = 1025;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, apexParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 1039;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1027;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1029;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FINAL) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier || _la === apexParser.AT) {
					{
					this.state = 1028;
					this.forInit();
					}
				}

				this.state = 1031;
				this.match(apexParser.SEMI);
				this.state = 1033;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
					{
					this.state = 1032;
					this.expression(0);
					}
				}

				this.state = 1035;
				this.match(apexParser.SEMI);
				this.state = 1037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
					{
					this.state = 1036;
					this.forUpdate();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, apexParser.RULE_forInit);
		try {
			this.state = 1043;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1041;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1042;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, apexParser.RULE_enhancedForControl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1048;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.FINAL || _la === apexParser.AT) {
				{
				{
				this.state = 1045;
				this.variableModifier();
				}
				}
				this.state = 1050;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1051;
			this.type_();
			this.state = 1052;
			this.variableDeclaratorId();
			this.state = 1053;
			this.match(apexParser.COLON);
			this.state = 1054;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forUpdate(): ForUpdateContext {
		let _localctx: ForUpdateContext = new ForUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, apexParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1056;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parExpression(): ParExpressionContext {
		let _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, apexParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1058;
			this.match(apexParser.LPAREN);
			this.state = 1059;
			this.expression(0);
			this.state = 1060;
			this.match(apexParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, apexParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1062;
			this.expression(0);
			this.state = 1067;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === apexParser.COMMA) {
				{
				{
				this.state = 1063;
				this.match(apexParser.COMMA);
				this.state = 1064;
				this.expression(0);
				}
				}
				this.state = 1069;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementExpression(): StatementExpressionContext {
		let _localctx: StatementExpressionContext = new StatementExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, apexParser.RULE_statementExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1070;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constantExpression(): ConstantExpressionContext {
		let _localctx: ConstantExpressionContext = new ConstantExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, apexParser.RULE_constantExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1072;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public apexDbUpsertExpression(): ApexDbUpsertExpressionContext {
		let _localctx: ApexDbUpsertExpressionContext = new ApexDbUpsertExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, apexParser.RULE_apexDbUpsertExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1074;
			this.match(apexParser.DB_UPSERT);
			this.state = 1075;
			this.expression(0);
			this.state = 1079;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
				{
				{
				this.state = 1076;
				this.expression(0);
				}
				}
				this.state = 1081;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public apexDbExpression(): ApexDbExpressionContext {
		let _localctx: ApexDbExpressionContext = new ApexDbExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, apexParser.RULE_apexDbExpression);
		let _la: number;
		try {
			this.state = 1085;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.DB_INSERT:
			case apexParser.DB_UPDATE:
			case apexParser.DB_DELETE:
			case apexParser.DB_UNDELETE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1082;
				_la = this._input.LA(1);
				if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (apexParser.DB_INSERT - 55)) | (1 << (apexParser.DB_UPDATE - 55)) | (1 << (apexParser.DB_DELETE - 55)) | (1 << (apexParser.DB_UNDELETE - 55)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1083;
				this.expression(0);
				}
				break;
			case apexParser.DB_UPSERT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1084;
				this.apexDbUpsertExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 184;
		this.enterRecursionRule(_localctx, 184, apexParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				{
				this.state = 1088;
				this.primary();
				}
				break;

			case 2:
				{
				this.state = 1089;
				this.match(apexParser.NEW);
				this.state = 1090;
				this.creator();
				}
				break;

			case 3:
				{
				this.state = 1091;
				this.match(apexParser.LPAREN);
				this.state = 1092;
				this.type_();
				this.state = 1093;
				this.match(apexParser.RPAREN);
				this.state = 1094;
				this.expression(17);
				}
				break;

			case 4:
				{
				this.state = 1096;
				_la = this._input.LA(1);
				if (!(((((_la - 90)) & ~0x1F) === 0 && ((1 << (_la - 90)) & ((1 << (apexParser.INC - 90)) | (1 << (apexParser.DEC - 90)) | (1 << (apexParser.ADD - 90)) | (1 << (apexParser.SUB - 90)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1097;
				this.expression(15);
				}
				break;

			case 5:
				{
				this.state = 1098;
				_la = this._input.LA(1);
				if (!(_la === apexParser.BANG || _la === apexParser.TILDE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1099;
				this.expression(14);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1205;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1203;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1102;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1103;
						_la = this._input.LA(1);
						if (!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (apexParser.MUL - 94)) | (1 << (apexParser.DIV - 94)) | (1 << (apexParser.MOD - 94)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1104;
						this.expression(14);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1105;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1106;
						_la = this._input.LA(1);
						if (!(_la === apexParser.ADD || _la === apexParser.SUB)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1107;
						this.expression(13);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1108;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1116;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
						case 1:
							{
							this.state = 1109;
							this.match(apexParser.LT);
							this.state = 1110;
							this.match(apexParser.LT);
							}
							break;

						case 2:
							{
							this.state = 1111;
							this.match(apexParser.GT);
							this.state = 1112;
							this.match(apexParser.GT);
							this.state = 1113;
							this.match(apexParser.GT);
							}
							break;

						case 3:
							{
							this.state = 1114;
							this.match(apexParser.GT);
							this.state = 1115;
							this.match(apexParser.GT);
							}
							break;
						}
						this.state = 1118;
						this.expression(12);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1119;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1120;
						_la = this._input.LA(1);
						if (!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (apexParser.GT - 78)) | (1 << (apexParser.LT - 78)) | (1 << (apexParser.LE - 78)) | (1 << (apexParser.GE - 78)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1121;
						this.expression(11);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1122;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 1123;
						_la = this._input.LA(1);
						if (!(_la === apexParser.T__0 || _la === apexParser.EQUAL || _la === apexParser.NOTEQUAL)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1124;
						this.expression(9);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1125;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 1126;
						this.match(apexParser.BITAND);
						this.state = 1127;
						this.expression(8);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1128;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 1129;
						this.match(apexParser.CARET);
						this.state = 1130;
						this.expression(7);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1131;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 1132;
						this.match(apexParser.BITOR);
						this.state = 1133;
						this.expression(6);
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1134;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 1135;
						this.match(apexParser.AND);
						this.state = 1136;
						this.expression(5);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1137;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 1138;
						this.match(apexParser.OR);
						this.state = 1139;
						this.expression(4);
						}
						break;

					case 11:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1140;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1141;
						this.match(apexParser.QUESTION);
						this.state = 1142;
						this.expression(0);
						this.state = 1143;
						this.match(apexParser.COLON);
						this.state = 1144;
						this.expression(3);
						}
						break;

					case 12:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1146;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 1147;
						_la = this._input.LA(1);
						if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (apexParser.ASSIGN - 77)) | (1 << (apexParser.ADD_ASSIGN - 77)) | (1 << (apexParser.SUB_ASSIGN - 77)) | (1 << (apexParser.MUL_ASSIGN - 77)) | (1 << (apexParser.DIV_ASSIGN - 77)) | (1 << (apexParser.AND_ASSIGN - 77)) | (1 << (apexParser.OR_ASSIGN - 77)) | (1 << (apexParser.XOR_ASSIGN - 77)) | (1 << (apexParser.MOD_ASSIGN - 77)) | (1 << (apexParser.LSHIFT_ASSIGN - 77)))) !== 0) || _la === apexParser.RSHIFT_ASSIGN || _la === apexParser.URSHIFT_ASSIGN)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1148;
						this.expression(1);
						}
						break;

					case 13:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1149;
						if (!(this.precpred(this._ctx, 28))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
						}
						this.state = 1150;
						this.match(apexParser.DOT);
						this.state = 1151;
						this.match(apexParser.GET);
						this.state = 1152;
						this.match(apexParser.LPAREN);
						this.state = 1154;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
							{
							this.state = 1153;
							this.expressionList();
							}
						}

						this.state = 1156;
						this.match(apexParser.RPAREN);
						}
						break;

					case 14:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1157;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 1158;
						this.match(apexParser.DOT);
						this.state = 1159;
						this.match(apexParser.SET);
						this.state = 1160;
						this.match(apexParser.LPAREN);
						this.state = 1162;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
							{
							this.state = 1161;
							this.expressionList();
							}
						}

						this.state = 1164;
						this.match(apexParser.RPAREN);
						}
						break;

					case 15:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1165;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 1167;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === apexParser.QUESTION) {
							{
							this.state = 1166;
							this.match(apexParser.QUESTION);
							}
						}

						this.state = 1169;
						this.match(apexParser.DOT);
						this.state = 1170;
						this.match(apexParser.Identifier);
						}
						break;

					case 16:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1171;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 1172;
						this.match(apexParser.DOT);
						this.state = 1173;
						this.match(apexParser.THIS);
						}
						break;

					case 17:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1174;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 1175;
						this.match(apexParser.DOT);
						this.state = 1176;
						this.match(apexParser.NEW);
						}
						break;

					case 18:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1177;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 1178;
						this.match(apexParser.DOT);
						this.state = 1179;
						_la = this._input.LA(1);
						if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (apexParser.DB_INSERT - 55)) | (1 << (apexParser.DB_UPSERT - 55)) | (1 << (apexParser.DB_UPDATE - 55)) | (1 << (apexParser.DB_DELETE - 55)) | (1 << (apexParser.DB_UNDELETE - 55)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 19:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1180;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 1181;
						this.match(apexParser.DOT);
						this.state = 1182;
						this.match(apexParser.SUPER);
						this.state = 1183;
						this.superSuffix();
						}
						break;

					case 20:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1184;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 1185;
						this.match(apexParser.DOT);
						this.state = 1186;
						this.explicitGenericInvocation();
						}
						break;

					case 21:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1187;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 1188;
						this.match(apexParser.LBRACK);
						this.state = 1189;
						this.expression(0);
						this.state = 1190;
						this.match(apexParser.RBRACK);
						}
						break;

					case 22:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1192;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 1193;
						this.match(apexParser.LPAREN);
						this.state = 1195;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
							{
							this.state = 1194;
							this.expressionList();
							}
						}

						this.state = 1197;
						this.match(apexParser.RPAREN);
						}
						break;

					case 23:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1198;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 1199;
						_la = this._input.LA(1);
						if (!(_la === apexParser.INC || _la === apexParser.DEC)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 24:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, apexParser.RULE_expression);
						this.state = 1200;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1201;
						this.match(apexParser.INSTANCEOF);
						this.state = 1202;
						this.type_();
						}
						break;
					}
					}
				}
				this.state = 1207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, apexParser.RULE_primary);
		try {
			this.state = 1230;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 136, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1208;
				this.match(apexParser.LPAREN);
				this.state = 1209;
				this.expression(0);
				this.state = 1210;
				this.match(apexParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1212;
				this.match(apexParser.THIS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1213;
				this.match(apexParser.SUPER);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1214;
				this.literal();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1215;
				this.match(apexParser.Identifier);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1216;
				this.type_();
				this.state = 1217;
				this.match(apexParser.DOT);
				this.state = 1218;
				this.match(apexParser.CLASS);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1220;
				this.match(apexParser.VOID);
				this.state = 1221;
				this.match(apexParser.DOT);
				this.state = 1222;
				this.match(apexParser.CLASS);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1223;
				this.nonWildcardTypeArguments();
				this.state = 1227;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case apexParser.SUPER:
				case apexParser.Identifier:
					{
					this.state = 1224;
					this.explicitGenericInvocationSuffix();
					}
					break;
				case apexParser.THIS:
					{
					this.state = 1225;
					this.match(apexParser.THIS);
					this.state = 1226;
					this.arguments();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1229;
				this.match(apexParser.SoqlLiteral);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public creator(): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, apexParser.RULE_creator);
		try {
			this.state = 1243;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.LT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1232;
				this.nonWildcardTypeArguments();
				this.state = 1233;
				this.createdName();
				this.state = 1234;
				this.classCreatorRest();
				}
				break;
			case apexParser.SET:
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.SHORT:
			case apexParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1236;
				this.createdName();
				this.state = 1241;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
				case 1:
					{
					this.state = 1237;
					this.arrayCreatorRest();
					}
					break;

				case 2:
					{
					this.state = 1238;
					this.classCreatorRest();
					}
					break;

				case 3:
					{
					this.state = 1239;
					this.mapCreatorRest();
					}
					break;

				case 4:
					{
					this.state = 1240;
					this.setCreatorRest();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		let _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, apexParser.RULE_createdName);
		let _la: number;
		try {
			this.state = 1262;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1245;
				this.match(apexParser.Identifier);
				this.state = 1247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === apexParser.LT) {
					{
					this.state = 1246;
					this.typeArgumentsOrDiamond();
					}
				}

				this.state = 1256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === apexParser.DOT) {
					{
					{
					this.state = 1249;
					this.match(apexParser.DOT);
					this.state = 1250;
					this.match(apexParser.Identifier);
					this.state = 1252;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === apexParser.LT) {
						{
						this.state = 1251;
						this.typeArgumentsOrDiamond();
						}
					}

					}
					}
					this.state = 1258;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.SHORT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1259;
				this.primitiveType();
				}
				break;
			case apexParser.SET:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1260;
				this.match(apexParser.SET);
				this.state = 1261;
				this.typeArgumentsOrDiamond();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public innerCreator(): InnerCreatorContext {
		let _localctx: InnerCreatorContext = new InnerCreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, apexParser.RULE_innerCreator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1264;
			this.match(apexParser.Identifier);
			this.state = 1266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === apexParser.LT) {
				{
				this.state = 1265;
				this.nonWildcardTypeArgumentsOrDiamond();
				}
			}

			this.state = 1268;
			this.classCreatorRest();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, apexParser.RULE_arrayCreatorRest);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1270;
			this.match(apexParser.LBRACK);
			this.state = 1298;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.RBRACK:
				{
				this.state = 1271;
				this.match(apexParser.RBRACK);
				this.state = 1276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === apexParser.LBRACK) {
					{
					{
					this.state = 1272;
					this.match(apexParser.LBRACK);
					this.state = 1273;
					this.match(apexParser.RBRACK);
					}
					}
					this.state = 1278;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1279;
				this.arrayInitializer();
				}
				break;
			case apexParser.SoqlLiteral:
			case apexParser.SET:
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.NEW:
			case apexParser.SHORT:
			case apexParser.SUPER:
			case apexParser.THIS:
			case apexParser.VOID:
			case apexParser.IntegerLiteral:
			case apexParser.FloatingPointLiteral:
			case apexParser.BooleanLiteral:
			case apexParser.CharacterLiteral:
			case apexParser.StringLiteral:
			case apexParser.NullLiteral:
			case apexParser.LPAREN:
			case apexParser.LT:
			case apexParser.BANG:
			case apexParser.TILDE:
			case apexParser.INC:
			case apexParser.DEC:
			case apexParser.ADD:
			case apexParser.SUB:
			case apexParser.Identifier:
				{
				this.state = 1280;
				this.expression(0);
				this.state = 1281;
				this.match(apexParser.RBRACK);
				this.state = 1288;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1282;
						this.match(apexParser.LBRACK);
						this.state = 1283;
						this.expression(0);
						this.state = 1284;
						this.match(apexParser.RBRACK);
						}
						}
					}
					this.state = 1290;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 145, this._ctx);
				}
				this.state = 1295;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1291;
						this.match(apexParser.LBRACK);
						this.state = 1292;
						this.match(apexParser.RBRACK);
						}
						}
					}
					this.state = 1297;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapCreatorRest(): MapCreatorRestContext {
		let _localctx: MapCreatorRestContext = new MapCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, apexParser.RULE_mapCreatorRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1300;
			this.match(apexParser.LBRACE);
			this.state = 1328;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.RBRACE:
				{
				this.state = 1301;
				this.match(apexParser.RBRACE);
				}
				break;
			case apexParser.SoqlLiteral:
			case apexParser.SET:
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.NEW:
			case apexParser.SHORT:
			case apexParser.SUPER:
			case apexParser.THIS:
			case apexParser.VOID:
			case apexParser.IntegerLiteral:
			case apexParser.FloatingPointLiteral:
			case apexParser.BooleanLiteral:
			case apexParser.CharacterLiteral:
			case apexParser.StringLiteral:
			case apexParser.NullLiteral:
			case apexParser.LPAREN:
			case apexParser.LT:
			case apexParser.BANG:
			case apexParser.TILDE:
			case apexParser.INC:
			case apexParser.DEC:
			case apexParser.ADD:
			case apexParser.SUB:
			case apexParser.Identifier:
				{
				this.state = 1304;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
				case 1:
					{
					this.state = 1302;
					this.match(apexParser.Identifier);
					}
					break;

				case 2:
					{
					this.state = 1303;
					this.expression(0);
					}
					break;
				}
				this.state = 1306;
				this.match(apexParser.LAMBDA_LIKE);
				this.state = 1309;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
				case 1:
					{
					this.state = 1307;
					this.literal();
					}
					break;

				case 2:
					{
					this.state = 1308;
					this.expression(0);
					}
					break;
				}
				this.state = 1323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === apexParser.COMMA) {
					{
					{
					this.state = 1311;
					this.match(apexParser.COMMA);
					this.state = 1314;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
					case 1:
						{
						this.state = 1312;
						this.match(apexParser.Identifier);
						}
						break;

					case 2:
						{
						this.state = 1313;
						this.expression(0);
						}
						break;
					}
					this.state = 1316;
					this.match(apexParser.LAMBDA_LIKE);
					this.state = 1319;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
					case 1:
						{
						this.state = 1317;
						this.literal();
						}
						break;

					case 2:
						{
						this.state = 1318;
						this.expression(0);
						}
						break;
					}
					}
					}
					this.state = 1325;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1326;
				this.match(apexParser.RBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setCreatorRest(): SetCreatorRestContext {
		let _localctx: SetCreatorRestContext = new SetCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, apexParser.RULE_setCreatorRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1330;
			this.match(apexParser.LBRACE);
			this.state = 1348;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.RBRACE:
				{
				this.state = 1331;
				this.match(apexParser.RBRACE);
				}
				break;
			case apexParser.SoqlLiteral:
			case apexParser.SET:
			case apexParser.BYTE:
			case apexParser.CHAR:
			case apexParser.FLOAT:
			case apexParser.INT:
			case apexParser.NEW:
			case apexParser.SHORT:
			case apexParser.SUPER:
			case apexParser.THIS:
			case apexParser.VOID:
			case apexParser.IntegerLiteral:
			case apexParser.FloatingPointLiteral:
			case apexParser.BooleanLiteral:
			case apexParser.CharacterLiteral:
			case apexParser.StringLiteral:
			case apexParser.NullLiteral:
			case apexParser.LPAREN:
			case apexParser.LT:
			case apexParser.BANG:
			case apexParser.TILDE:
			case apexParser.INC:
			case apexParser.DEC:
			case apexParser.ADD:
			case apexParser.SUB:
			case apexParser.Identifier:
				{
				this.state = 1334;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
				case 1:
					{
					this.state = 1332;
					this.literal();
					}
					break;

				case 2:
					{
					this.state = 1333;
					this.expression(0);
					}
					break;
				}
				this.state = 1343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === apexParser.COMMA) {
					{
					{
					this.state = 1336;
					this.match(apexParser.COMMA);
					this.state = 1339;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
					case 1:
						{
						this.state = 1337;
						this.literal();
						}
						break;

					case 2:
						{
						this.state = 1338;
						this.expression(0);
						}
						break;
					}
					}
					}
					this.state = 1345;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1346;
				this.match(apexParser.RBRACE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classCreatorRest(): ClassCreatorRestContext {
		let _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, apexParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1350;
			this.arguments();
			this.state = 1352;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				{
				this.state = 1351;
				this.classBody();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocation(): ExplicitGenericInvocationContext {
		let _localctx: ExplicitGenericInvocationContext = new ExplicitGenericInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, apexParser.RULE_explicitGenericInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1354;
			this.nonWildcardTypeArguments();
			this.state = 1355;
			this.explicitGenericInvocationSuffix();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		let _localctx: NonWildcardTypeArgumentsContext = new NonWildcardTypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, apexParser.RULE_nonWildcardTypeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1357;
			this.match(apexParser.LT);
			this.state = 1358;
			this.typeList();
			this.state = 1359;
			this.match(apexParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
		let _localctx: TypeArgumentsOrDiamondContext = new TypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, apexParser.RULE_typeArgumentsOrDiamond);
		try {
			this.state = 1364;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1361;
				this.match(apexParser.LT);
				this.state = 1362;
				this.match(apexParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1363;
				this.typeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext {
		let _localctx: NonWildcardTypeArgumentsOrDiamondContext = new NonWildcardTypeArgumentsOrDiamondContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, apexParser.RULE_nonWildcardTypeArgumentsOrDiamond);
		try {
			this.state = 1369;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1366;
				this.match(apexParser.LT);
				this.state = 1367;
				this.match(apexParser.GT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1368;
				this.nonWildcardTypeArguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public superSuffix(): SuperSuffixContext {
		let _localctx: SuperSuffixContext = new SuperSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, apexParser.RULE_superSuffix);
		try {
			this.state = 1377;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1371;
				this.arguments();
				}
				break;
			case apexParser.DOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1372;
				this.match(apexParser.DOT);
				this.state = 1373;
				this.match(apexParser.Identifier);
				this.state = 1375;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
				case 1:
					{
					this.state = 1374;
					this.arguments();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		let _localctx: ExplicitGenericInvocationSuffixContext = new ExplicitGenericInvocationSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, apexParser.RULE_explicitGenericInvocationSuffix);
		try {
			this.state = 1383;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case apexParser.SUPER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1379;
				this.match(apexParser.SUPER);
				this.state = 1380;
				this.superSuffix();
				}
				break;
			case apexParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1381;
				this.match(apexParser.Identifier);
				this.state = 1382;
				this.arguments();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, apexParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1385;
			this.match(apexParser.LPAREN);
			this.state = 1387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << apexParser.SoqlLiteral) | (1 << apexParser.SET) | (1 << apexParser.BYTE) | (1 << apexParser.CHAR) | (1 << apexParser.FLOAT) | (1 << apexParser.INT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (apexParser.NEW - 32)) | (1 << (apexParser.SHORT - 32)) | (1 << (apexParser.SUPER - 32)) | (1 << (apexParser.THIS - 32)) | (1 << (apexParser.VOID - 32)) | (1 << (apexParser.IntegerLiteral - 32)) | (1 << (apexParser.FloatingPointLiteral - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (apexParser.BooleanLiteral - 64)) | (1 << (apexParser.CharacterLiteral - 64)) | (1 << (apexParser.StringLiteral - 64)) | (1 << (apexParser.NullLiteral - 64)) | (1 << (apexParser.LPAREN - 64)) | (1 << (apexParser.LT - 64)) | (1 << (apexParser.BANG - 64)) | (1 << (apexParser.TILDE - 64)) | (1 << (apexParser.INC - 64)) | (1 << (apexParser.DEC - 64)) | (1 << (apexParser.ADD - 64)) | (1 << (apexParser.SUB - 64)))) !== 0) || _la === apexParser.Identifier) {
				{
				this.state = 1386;
				this.expressionList();
				}
			}

			this.state = 1389;
			this.match(apexParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 92:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 6);

		case 7:
			return this.precpred(this._ctx, 5);

		case 8:
			return this.precpred(this._ctx, 4);

		case 9:
			return this.precpred(this._ctx, 3);

		case 10:
			return this.precpred(this._ctx, 2);

		case 11:
			return this.precpred(this._ctx, 1);

		case 12:
			return this.precpred(this._ctx, 28);

		case 13:
			return this.precpred(this._ctx, 27);

		case 14:
			return this.precpred(this._ctx, 26);

		case 15:
			return this.precpred(this._ctx, 25);

		case 16:
			return this.precpred(this._ctx, 24);

		case 17:
			return this.precpred(this._ctx, 23);

		case 18:
			return this.precpred(this._ctx, 22);

		case 19:
			return this.precpred(this._ctx, 21);

		case 20:
			return this.precpred(this._ctx, 20);

		case 21:
			return this.precpred(this._ctx, 19);

		case 22:
			return this.precpred(this._ctx, 16);

		case 23:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03{\u0572\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x03\x02\x05\x02\xDC\n\x02\x03\x02" +
		"\x07\x02\xDF\n\x02\f\x02\x0E\x02\xE2\v\x02\x03\x02\x07\x02\xE5\n\x02\f" +
		"\x02\x0E\x02\xE8\v\x02\x03\x02\x03\x02\x03\x03\x07\x03\xED\n\x03\f\x03" +
		"\x0E\x03\xF0\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05" +
		"\x04\xF8\n\x04\x03\x04\x03\x04\x03\x04\x05\x04\xFD\n\x04\x03\x04\x03\x04" +
		"\x03\x05\x07\x05\u0102\n\x05\f\x05\x0E\x05\u0105\v\x05\x03\x05\x03\x05" +
		"\x07\x05\u0109\n\x05\f\x05\x0E\x05\u010C\v\x05\x03\x05\x03\x05\x07\x05" +
		"\u0110\n\x05\f\x05\x0E\x05\u0113\v\x05\x03\x05\x03\x05\x07\x05\u0117\n" +
		"\x05\f\x05\x0E\x05\u011A\v\x05\x03\x05\x03\x05\x05\x05\u011E\n\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0124\n\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\u0134\n\x07\x03\b\x03\b\x05\b\u0138\n\b\x03\t" +
		"\x03\t\x03\t\x05\t\u013D\n\t\x03\t\x03\t\x05\t\u0141\n\t\x03\t\x03\t\x05" +
		"\t\u0145\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x07\n\u014D\n\n\f\n\x0E" +
		"\n\u0150\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x05\v\u0157\n\v\x03\f\x03\f" +
		"\x03\f\x07\f\u015C\n\f\f\f\x0E\f\u015F\v\f\x03\r\x03\r\x03\r\x03\r\x05" +
		"\r\u0165\n\r\x03\r\x03\r\x05\r\u0169\n\r\x03\r\x05\r\u016C\n\r\x03\r\x05" +
		"\r\u016F\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u0176\n\x0E\f" +
		"\x0E\x0E\x0E\u0179\v\x0E\x03\x0F\x07\x0F\u017C\n\x0F\f\x0F\x0E\x0F\u017F" +
		"\v\x0F\x03\x0F\x03\x0F\x05\x0F\u0183\n\x0F\x03\x0F\x05\x0F\u0186\n\x0F" +
		"\x03\x10\x03\x10\x07\x10\u018A\n\x10\f\x10\x0E\x10\u018D\v\x10\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u0192\n\x11\x03\x11\x03\x11\x05\x11\u0196\n\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\u019D\n\x12\f\x12\x0E" +
		"\x12\u01A0\v\x12\x03\x13\x03\x13\x07\x13\u01A4\n\x13\f\x13\x0E\x13\u01A7" +
		"\v\x13\x03\x13\x03\x13\x03\x14\x03\x14\x07\x14\u01AD\n\x14\f\x14\x0E\x14" +
		"\u01B0\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\u01B6\n\x15\x03\x15" +
		"\x03\x15\x07\x15\u01BA\n\x15\f\x15\x0E\x15\u01BD\v\x15\x03\x15\x05\x15" +
		"\u01C0\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x05\x16\u01CC\n\x16\x03\x17\x05\x17\u01CF\n\x17\x03" +
		"\x17\x03\x17\x05\x17\u01D3\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17" +
		"\u01D9\n\x17\f\x17\x0E\x17\u01DC\v\x17\x03\x17\x03\x17\x05\x17\u01E0\n" +
		"\x17\x03\x17\x03\x17\x05\x17\u01E4\n\x17\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x05\x19\u01ED\n\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01FF\n\x1D\x03\x1D\x03\x1D\x03\x1E" +
		"\x07\x1E\u0204\n\x1E\f\x1E\x0E\x1E\u0207\v\x1E\x03\x1E\x03\x1E\x05\x1E" +
		"\u020B\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05" +
		"\x1F\u0214\n\x1F\x03 \x03 \x03 \x03 \x07 \u021A\n \f \x0E \u021D\v \x03" +
		" \x03 \x03!\x03!\x03!\x07!\u0224\n!\f!\x0E!\u0227\v!\x03!\x03!\x03!\x03" +
		"\"\x03\"\x05\"\u022E\n\"\x03\"\x03\"\x03\"\x03\"\x07\"\u0234\n\"\f\"\x0E" +
		"\"\u0237\v\"\x03\"\x03\"\x05\"\u023B\n\"\x03\"\x03\"\x03#\x03#\x03#\x03" +
		"$\x03$\x03$\x07$\u0245\n$\f$\x0E$\u0248\v$\x03%\x03%\x03%\x05%\u024D\n" +
		"%\x03&\x03&\x03&\x07&\u0252\n&\f&\x0E&\u0255\v&\x03\'\x03\'\x05\'\u0259" +
		"\n\'\x03(\x03(\x03(\x03(\x07(\u025F\n(\f(\x0E(\u0262\v(\x03(\x05(\u0265" +
		"\n(\x05(\u0267\n(\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x07*\u0270\n*\f*" +
		"\x0E*\u0273\v*\x03*\x03*\x03*\x07*\u0278\n*\f*\x0E*\u027B\v*\x05*\u027D" +
		"\n*\x03+\x03+\x05+\u0281\n+\x03+\x03+\x03+\x05+\u0286\n+\x07+\u0288\n" +
		"+\f+\x0E+\u028B\v+\x03+\x03+\x05+\u028F\n+\x03,\x03,\x03-\x03-\x03-\x03" +
		"-\x07-\u0297\n-\f-\x0E-\u029A\v-\x03-\x03-\x03.\x03.\x03.\x03.\x05.\u02A2" +
		"\n.\x05.\u02A4\n.\x03/\x03/\x03/\x07/\u02A9\n/\f/\x0E/\u02AC\v/\x030\x03" +
		"0\x050\u02B0\n0\x030\x030\x031\x031\x031\x071\u02B7\n1\f1\x0E1\u02BA\v" +
		"1\x031\x031\x051\u02BE\n1\x031\x051\u02C1\n1\x032\x072\u02C4\n2\f2\x0E" +
		"2\u02C7\v2\x032\x032\x032\x033\x073\u02CD\n3\f3\x0E3\u02D0\v3\x033\x03" +
		"3\x033\x033\x034\x034\x035\x035\x036\x036\x036\x076\u02DD\n6\f6\x0E6\u02E0" +
		"\v6\x037\x037\x038\x038\x038\x038\x038\x058\u02E9\n8\x038\x058\u02EC\n" +
		"8\x039\x039\x03:\x03:\x05:\u02F2\n:\x03:\x07:\u02F5\n:\f:\x0E:\u02F8\v" +
		":\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x05<\u0301\n<\x03=\x03=\x03=\x03" +
		"=\x07=\u0307\n=\f=\x0E=\u030A\v=\x05=\u030C\n=\x03=\x05=\u030F\n=\x03" +
		"=\x03=\x03>\x03>\x03>\x03>\x03>\x03?\x03?\x07?\u031A\n?\f?\x0E?\u031D" +
		"\v?\x03?\x03?\x03@\x07@\u0322\n@\f@\x0E@\u0325\v@\x03@\x03@\x05@\u0329" +
		"\n@\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u0331\nA\x03A\x03A\x05A\u0335\n" +
		"A\x03A\x03A\x05A\u0339\nA\x03A\x03A\x05A\u033D\nA\x05A\u033F\nA\x03B\x03" +
		"B\x05B\u0343\nB\x03C\x03C\x03C\x03C\x05C\u0349\nC\x03D\x03D\x03E\x03E" +
		"\x03E\x03F\x03F\x07F\u0352\nF\fF\x0EF\u0355\vF\x03F\x03F\x03G\x03G\x03" +
		"G\x05G\u035C\nG\x03H\x03H\x03H\x03I\x07I\u0362\nI\fI\x0EI\u0365\vI\x03" +
		"I\x03I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u0370\nJ\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x06J\u038B\nJ\rJ\x0EJ\u038C" +
		"\x03J\x05J\u0390\nJ\x03J\x05J\u0393\nJ\x03J\x03J\x03J\x03J\x07J\u0399" +
		"\nJ\fJ\x0EJ\u039C\vJ\x03J\x05J\u039F\nJ\x03J\x03J\x05J\u03A3\nJ\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x05J\u03AC\nJ\x03J\x03J\x03J\x05J\u03B1\nJ" +
		"\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u03BE\nJ" +
		"\x03K\x07K\u03C1\nK\fK\x0EK\u03C4\vK\x03K\x03K\x05K\u03C8\nK\x03L\x03" +
		"L\x03L\x05L\u03CD\nL\x03M\x03M\x03M\x05M\u03D2\nM\x03N\x03N\x03N\x07N" +
		"\u03D7\nN\fN\x0EN\u03DA\vN\x03N\x03N\x03N\x03N\x03N\x03O\x03O\x03O\x07" +
		"O\u03E4\nO\fO\x0EO\u03E7\vO\x03P\x03P\x03P\x03Q\x03Q\x03Q\x05Q\u03EF\n" +
		"Q\x03Q\x03Q\x03R\x03R\x03R\x07R\u03F6\nR\fR\x0ER\u03F9\vR\x03S\x07S\u03FC" +
		"\nS\fS\x0ES\u03FF\vS\x03S\x03S\x03S\x03S\x03S\x03T\x03T\x05T\u0408\nT" +
		"\x03T\x03T\x05T\u040C\nT\x03T\x03T\x05T\u0410\nT\x05T\u0412\nT\x03U\x03" +
		"U\x05U\u0416\nU\x03V\x07V\u0419\nV\fV\x0EV\u041C\vV\x03V\x03V\x03V\x03" +
		"V\x03V\x03W\x03W\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x07Y\u042C\nY\fY\x0E" +
		"Y\u042F\vY\x03Z\x03Z\x03[\x03[\x03\\\x03\\\x03\\\x07\\\u0438\n\\\f\\\x0E" +
		"\\\u043B\v\\\x03]\x03]\x03]\x05]\u0440\n]\x03^\x03^\x03^\x03^\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u044F\n^\x03^\x03^\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u045F\n^\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u0485\n^\x03^\x03^\x03^\x03" +
		"^\x03^\x03^\x05^\u048D\n^\x03^\x03^\x03^\x05^\u0492\n^\x03^\x03^\x03^" +
		"\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x05^\u04AE\n^\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x07^\u04B6\n^\f^\x0E^\u04B9\v^\x03_\x03_\x03_\x03" +
		"_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
		"_\x03_\x05_\u04CE\n_\x03_\x05_\u04D1\n_\x03`\x03`\x03`\x03`\x03`\x03`" +
		"\x03`\x03`\x03`\x05`\u04DC\n`\x05`\u04DE\n`\x03a\x03a\x05a\u04E2\na\x03" +
		"a\x03a\x03a\x05a\u04E7\na\x07a\u04E9\na\fa\x0Ea\u04EC\va\x03a\x03a\x03" +
		"a\x05a\u04F1\na\x03b\x03b\x05b\u04F5\nb\x03b\x03b\x03c\x03c\x03c\x03c" +
		"\x07c\u04FD\nc\fc\x0Ec\u0500\vc\x03c\x03c\x03c\x03c\x03c\x03c\x03c\x07" +
		"c\u0509\nc\fc\x0Ec\u050C\vc\x03c\x03c\x07c\u0510\nc\fc\x0Ec\u0513\vc\x05" +
		"c\u0515\nc\x03d\x03d\x03d\x03d\x05d\u051B\nd\x03d\x03d\x03d\x05d\u0520" +
		"\nd\x03d\x03d\x03d\x05d\u0525\nd\x03d\x03d\x03d\x05d\u052A\nd\x07d\u052C" +
		"\nd\fd\x0Ed\u052F\vd\x03d\x03d\x05d\u0533\nd\x03e\x03e\x03e\x03e\x05e" +
		"\u0539\ne\x03e\x03e\x03e\x05e\u053E\ne\x07e\u0540\ne\fe\x0Ee\u0543\ve" +
		"\x03e\x03e\x05e\u0547\ne\x03f\x03f\x05f\u054B\nf\x03g\x03g\x03g\x03h\x03" +
		"h\x03h\x03h\x03i\x03i\x03i\x05i\u0557\ni\x03j\x03j\x03j\x05j\u055C\nj" +
		"\x03k\x03k\x03k\x03k\x05k\u0562\nk\x05k\u0564\nk\x03l\x03l\x03l\x03l\x05" +
		"l\u056A\nl\x03m\x03m\x05m\u056E\nm\x03m\x03m\x03m\x02\x02\x03\xBAn\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
		"\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
		"\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02" +
		"\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02" +
		"\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02" +
		"\x02\x0F\x07\x02\v\v\r\r\x18\x18\x1F\x1F((\x04\x02\x15\x15**\x03\x02@" +
		"E\x04\x0299;=\x03\x02\\_\x03\x02RS\x04\x02`aee\x03\x02^_\x04\x02PQWX\x05" +
		"\x02\x03\x03VVYY\x04\x02OOfp\x03\x029=\x03\x02\\]\x02\u0601\x02\xDB\x03" +
		"\x02\x02\x02\x04\xEE\x03\x02\x02\x02\x06\xF5\x03\x02\x02\x02\b\u011D\x03" +
		"\x02\x02\x02\n\u0123\x03\x02\x02\x02\f\u0133\x03\x02\x02\x02\x0E\u0137" +
		"\x03\x02\x02\x02\x10\u0139\x03\x02\x02\x02\x12\u0148\x03\x02\x02\x02\x14" +
		"\u0153\x03\x02\x02\x02\x16\u0158\x03\x02\x02\x02\x18\u0160\x03\x02\x02" +
		"\x02\x1A\u0172\x03\x02\x02\x02\x1C\u017D\x03\x02\x02\x02\x1E\u0187\x03" +
		"\x02\x02\x02 \u018E\x03\x02\x02\x02\"\u0199\x03\x02\x02\x02$\u01A1\x03" +
		"\x02\x02\x02&\u01AA\x03\x02\x02\x02(\u01BF\x03\x02\x02\x02*\u01CB\x03" +
		"\x02\x02\x02,\u01CE\x03\x02\x02\x02.\u01E5\x03\x02\x02\x020\u01E8\x03" +
		"\x02\x02\x022\u01F0\x03\x02\x02\x024\u01F3\x03\x02\x02\x026\u01F7\x03" +
		"\x02\x02\x028\u01FB\x03\x02\x02\x02:\u020A\x03\x02\x02\x02<\u0213\x03" +
		"\x02\x02\x02>\u0215\x03\x02\x02\x02@\u0220\x03\x02\x02\x02B\u022D\x03" +
		"\x02\x02\x02D\u023E\x03\x02\x02\x02F\u0241\x03\x02\x02\x02H\u0249\x03" +
		"\x02\x02\x02J\u024E\x03\x02\x02\x02L\u0258\x03\x02\x02\x02N\u025A\x03" +
		"\x02\x02\x02P\u026A\x03\x02\x02\x02R\u027C\x03\x02\x02\x02T\u028E\x03" +
		"\x02\x02\x02V\u0290\x03\x02\x02\x02X\u0292\x03\x02\x02\x02Z\u02A3\x03" +
		"\x02\x02\x02\\\u02A5\x03\x02\x02\x02^\u02AD\x03\x02\x02\x02`\u02C0\x03" +
		"\x02\x02\x02b\u02C5\x03\x02\x02\x02d\u02CE\x03\x02\x02\x02f\u02D5\x03" +
		"\x02\x02\x02h\u02D7\x03\x02\x02\x02j\u02D9\x03\x02\x02\x02l\u02E1\x03" +
		"\x02\x02\x02n\u02E3\x03\x02\x02\x02p\u02ED\x03\x02\x02\x02r\u02EF\x03" +
		"\x02\x02\x02t\u02F9\x03\x02\x02\x02v\u0300\x03\x02\x02\x02x\u0302\x03" +
		"\x02\x02\x02z\u0312\x03\x02\x02\x02|\u0317\x03\x02\x02\x02~\u0328\x03" +
		"\x02\x02\x02\x80\u033E\x03\x02\x02\x02\x82\u0342\x03\x02\x02\x02\x84\u0344" +
		"\x03\x02\x02\x02\x86\u034A\x03\x02\x02\x02\x88\u034C\x03\x02\x02\x02\x8A" +
		"\u034F\x03\x02\x02\x02\x8C\u035B\x03\x02\x02\x02\x8E\u035D\x03\x02\x02" +
		"\x02\x90\u0363\x03\x02\x02\x02\x92\u03BD\x03\x02\x02\x02\x94\u03C2\x03" +
		"\x02\x02\x02\x96\u03C9\x03\x02\x02\x02\x98\u03CE\x03\x02\x02\x02\x9A\u03D3" +
		"\x03\x02\x02\x02\x9C\u03E0\x03\x02\x02\x02\x9E\u03E8\x03\x02\x02\x02\xA0" +
		"\u03EB\x03\x02\x02\x02\xA2\u03F2\x03\x02\x02\x02\xA4\u03FD\x03\x02\x02" +
		"\x02\xA6\u0411\x03\x02\x02\x02\xA8\u0415\x03\x02\x02\x02\xAA\u041A\x03" +
		"\x02\x02\x02\xAC\u0422\x03\x02\x02\x02\xAE\u0424\x03\x02\x02\x02\xB0\u0428" +
		"\x03\x02\x02\x02\xB2\u0430\x03\x02\x02\x02\xB4\u0432\x03\x02\x02\x02\xB6" +
		"\u0434\x03\x02\x02\x02\xB8\u043F\x03\x02\x02\x02\xBA\u044E\x03\x02\x02" +
		"\x02\xBC\u04D0\x03\x02\x02\x02\xBE\u04DD\x03\x02\x02\x02\xC0\u04F0\x03" +
		"\x02\x02\x02\xC2\u04F2\x03\x02\x02\x02\xC4\u04F8\x03\x02\x02\x02\xC6\u0516" +
		"\x03\x02\x02\x02\xC8\u0534\x03\x02\x02\x02\xCA\u0548\x03\x02\x02\x02\xCC" +
		"\u054C\x03\x02\x02\x02\xCE\u054F\x03\x02\x02\x02\xD0\u0556\x03\x02\x02" +
		"\x02\xD2\u055B\x03\x02\x02\x02\xD4\u0563\x03\x02\x02\x02\xD6\u0569\x03" +
		"\x02\x02\x02\xD8\u056B\x03\x02\x02\x02\xDA\xDC\x05\x04\x03\x02\xDB\xDA" +
		"\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xE0\x03\x02\x02\x02\xDD\xDF" +
		"\x05\x06\x04\x02\xDE\xDD\x03\x02\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xDE" +
		"\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE6\x03\x02\x02\x02\xE2\xE0" +
		"\x03\x02\x02\x02\xE3\xE5\x05\b\x05\x02\xE4\xE3\x03\x02\x02\x02\xE5\xE8" +
		"\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE9" +
		"\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEA\x07\x02\x02\x03\xEA\x03" +
		"\x03\x02\x02\x02\xEB\xED\x05n8\x02\xEC\xEB\x03\x02\x02\x02\xED\xF0\x03" +
		"\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03" +
		"\x02\x02\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF2\x07#\x02\x02\xF2\xF3\x05" +
		"j6\x02\xF3\xF4\x07L\x02\x02\xF4\x05\x03\x02\x02\x02\xF5\xF7\x07\x1D\x02" +
		"\x02\xF6\xF8\x07)\x02\x02\xF7\xF6\x03\x02\x02\x02\xF7\xF8\x03\x02\x02" +
		"\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFC\x05j6\x02\xFA\xFB\x07N\x02\x02\xFB" +
		"\xFD\x07`\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD" +
		"\xFE\x03\x02\x02\x02\xFE\xFF\x07L\x02\x02\xFF\x07\x03\x02\x02\x02\u0100" +
		"\u0102\x05\f\x07\x02\u0101\u0100\x03\x02\x02\x02\u0102\u0105\x03\x02\x02" +
		"\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0106" +
		"\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106\u011E\x05\x10\t\x02" +
		"\u0107\u0109\x05\f\x07\x02\u0108\u0107\x03\x02\x02\x02\u0109\u010C\x03" +
		"\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B" +
		"\u010D\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02\u010D\u011E\x05\x18" +
		"\r\x02\u010E\u0110\x05\f\x07\x02\u010F\u010E\x03\x02\x02\x02\u0110\u0113" +
		"\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02" +
		"\u0112\u0114\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u011E\x05" +
		" \x11\x02\u0115\u0117\x05\f\x07\x02\u0116\u0115\x03\x02\x02\x02\u0117" +
		"\u011A\x03\x02\x02\x02\u0118\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02" +
		"\x02\x02\u0119\u011B\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B" +
		"\u011E\x05z>\x02\u011C\u011E\x07L\x02\x02\u011D\u0103\x03\x02\x02\x02" +
		"\u011D\u010A\x03\x02\x02\x02\u011D\u0111\x03\x02\x02\x02\u011D\u0118\x03" +
		"\x02\x02\x02\u011D\u011C\x03\x02\x02\x02\u011E\t\x03\x02\x02\x02\u011F" +
		"\u0124\x05\f\x07\x02\u0120\u0124\x07!\x02\x02\u0121\u0124\x07+\x02\x02" +
		"\u0122\u0124\x07/\x02\x02\u0123\u011F\x03\x02\x02\x02\u0123\u0120\x03" +
		"\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124" +
		"\v\x03\x02\x02\x02\u0125\u0134\x05n8\x02\u0126\u0134\x07&\x02\x02\u0127" +
		"\u0134\x07%\x02\x02\u0128\u0134\x07$\x02\x02\u0129\u0134\x07)\x02\x02" +
		"\u012A\u0134\x07\t\x02\x02\u012B\u0134\x07\x16\x02\x02\u012C\u0134\x07" +
		"4\x02\x02\u012D\u0134\x075\x02\x02\u012E\u0134\x07\x05\x02\x02\u012F\u0134" +
		"\x07\x06\x02\x02\u0130\u0134\x07>\x02\x02\u0131\u0134\x076\x02\x02\u0132" +
		"\u0134\x077\x02\x02\u0133\u0125\x03\x02\x02\x02\u0133\u0126\x03\x02\x02" +
		"\x02\u0133\u0127\x03\x02\x02\x02\u0133\u0128\x03\x02\x02\x02\u0133\u0129" +
		"\x03\x02\x02\x02\u0133\u012A\x03\x02\x02\x02\u0133\u012B\x03\x02\x02\x02" +
		"\u0133\u012C\x03\x02\x02\x02\u0133\u012D\x03\x02\x02\x02\u0133\u012E\x03" +
		"\x02\x02\x02\u0133\u012F\x03\x02\x02\x02\u0133\u0130\x03\x02\x02\x02\u0133" +
		"\u0131\x03\x02\x02\x02\u0133\u0132\x03\x02\x02\x02\u0134\r\x03\x02\x02" +
		"\x02\u0135\u0138\x07\x16\x02\x02\u0136\u0138\x05n8\x02\u0137\u0135\x03" +
		"\x02\x02\x02\u0137\u0136\x03\x02\x02\x02\u0138\x0F\x03\x02\x02\x02\u0139" +
		"\u013A\x07\x0E\x02\x02\u013A\u013C\x07r\x02\x02\u013B\u013D\x05\x12\n" +
		"\x02\u013C\u013B\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u0140" +
		"\x03\x02\x02\x02\u013E\u013F\x07\x15\x02\x02\u013F\u0141\x05R*\x02\u0140" +
		"\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141\u0144\x03\x02" +
		"\x02\x02\u0142\u0143\x07\x1C\x02\x02\u0143\u0145\x05\"\x12\x02\u0144\u0142" +
		"\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02" +
		"\u0146\u0147\x05$\x13\x02\u0147\x11\x03\x02\x02\x02\u0148\u0149\x07Q\x02" +
		"\x02\u0149\u014E\x05\x14\v\x02\u014A\u014B\x07M\x02\x02\u014B\u014D\x05" +
		"\x14\v\x02\u014C\u014A\x03\x02\x02\x02\u014D\u0150\x03\x02\x02\x02\u014E" +
		"\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0151\x03\x02" +
		"\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0152\x07P\x02\x02\u0152\x13" +
		"\x03\x02\x02\x02\u0153\u0156\x07r\x02\x02\u0154\u0155\x07\x15\x02\x02" +
		"\u0155\u0157\x05\x16\f\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03" +
		"\x02\x02\x02\u0157\x15\x03\x02\x02\x02\u0158\u015D\x05R*\x02\u0159\u015A" +
		"\x07b\x02\x02\u015A\u015C\x05R*\x02\u015B\u0159\x03\x02\x02\x02\u015C" +
		"\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02" +
		"\x02\x02\u015E\x17\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160\u0161" +
		"\x07\x14\x02\x02\u0161\u0164\x07r\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0162\u0163\x07\x1C\x02\x02\u0163\u0165\x05\"\x12\x02\u0164\u0162" +
		"\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02" +
		"\u0166\u0168\x07H\x02\x02\u0167\u0169\x05\x1A\x0E\x02\u0168\u0167\x03" +
		"\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016B\x03\x02\x02\x02\u016A" +
		"\u016C\x07M\x02\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C\x03\x02\x02" +
		"\x02\u016C\u016E\x03\x02\x02\x02\u016D\u016F\x05\x1E\x10\x02\u016E\u016D" +
		"\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02" +
		"\u0170\u0171\x07I\x02\x02\u0171\x19\x03\x02\x02\x02\u0172\u0177\x05\x1C" +
		"\x0F\x02\u0173\u0174\x07M\x02\x02\u0174\u0176\x05\x1C\x0F\x02\u0175\u0173" +
		"\x03\x02\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02" +
		"\u0177\u0178\x03\x02\x02\x02\u0178\x1B\x03\x02\x02\x02\u0179\u0177\x03" +
		"\x02\x02\x02\u017A\u017C\x05n8\x02\u017B\u017A\x03\x02\x02\x02\u017C\u017F" +
		"\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02" +
		"\u017E\u0180\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u0180\u0182\x07" +
		"r\x02\x02\u0181\u0183\x05\xD8m\x02\u0182\u0181\x03\x02\x02\x02\u0182\u0183" +
		"\x03\x02\x02\x02\u0183\u0185\x03\x02\x02\x02\u0184\u0186\x05$\x13\x02" +
		"\u0185\u0184\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\x1D\x03" +
		"\x02\x02\x02\u0187\u018B\x07L\x02\x02\u0188\u018A\x05(\x15\x02\u0189\u0188" +
		"\x03\x02\x02\x02\u018A\u018D\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02" +
		"\u018B\u018C\x03\x02\x02\x02\u018C\x1F\x03\x02\x02\x02\u018D\u018B\x03" +
		"\x02\x02\x02\u018E\u018F\x07 \x02\x02\u018F\u0191\x07r\x02\x02\u0190\u0192" +
		"\x05\x12\n\x02\u0191\u0190\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02" +
		"\u0192\u0195\x03\x02\x02\x02\u0193\u0194\x07\x15\x02\x02\u0194\u0196\x05" +
		"\"\x12\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196" +
		"\u0197\x03\x02\x02\x02\u0197\u0198\x05&\x14\x02\u0198!\x03\x02\x02\x02" +
		"\u0199\u019E\x05R*\x02\u019A\u019B\x07M\x02\x02\u019B\u019D\x05R*\x02" +
		"\u019C\u019A\x03\x02\x02\x02\u019D\u01A0\x03\x02\x02\x02\u019E\u019C\x03" +
		"\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F#\x03\x02\x02\x02\u01A0" +
		"\u019E\x03\x02\x02\x02\u01A1\u01A5\x07H\x02\x02\u01A2\u01A4\x05(\x15\x02" +
		"\u01A3\u01A2\x03\x02\x02\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5\u01A3\x03" +
		"\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7" +
		"\u01A5\x03\x02\x02\x02\u01A8\u01A9\x07I\x02\x02\u01A9%\x03\x02\x02\x02" +
		"\u01AA\u01AE\x07H\x02\x02\u01AB\u01AD\x05:\x1E\x02\u01AC\u01AB\x03\x02" +
		"\x02\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE" +
		"\u01AF\x03\x02\x02\x02\u01AF\u01B1\x03\x02\x02\x02\u01B0\u01AE\x03\x02" +
		"\x02\x02\u01B1\u01B2\x07I\x02\x02\u01B2\'\x03\x02\x02\x02\u01B3\u01C0" +
		"\x07L\x02\x02\u01B4\u01B6\x07)\x02\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5" +
		"\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01C0\x05\x8A" +
		"F\x02\u01B8\u01BA\x05\n\x06\x02\u01B9\u01B8\x03\x02\x02\x02\u01BA\u01BD" +
		"\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02" +
		"\u01BC\u01BE\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BE\u01C0\x05" +
		"*\x16\x02\u01BF\u01B3\x03\x02\x02\x02\u01BF\u01B5\x03\x02\x02\x02\u01BF" +
		"\u01BB\x03\x02\x02\x02\u01C0)\x03\x02\x02\x02\u01C1\u01CC\x05,\x17\x02" +
		"\u01C2\u01CC\x05.\x18\x02\u01C3\u01CC\x054\x1B\x02\u01C4\u01CC\x050\x19" +
		"\x02\u01C5\u01CC\x052\x1A\x02\u01C6\u01CC\x05 \x11\x02\u01C7\u01CC\x05" +
		"z>\x02\u01C8\u01CC\x05\x10\t\x02\u01C9\u01CC\x05\x18\r\x02\u01CA\u01CC" +
		"\x056\x1C\x02\u01CB\u01C1\x03\x02\x02\x02\u01CB\u01C2\x03\x02\x02\x02" +
		"\u01CB\u01C3\x03\x02\x02\x02\u01CB\u01C4\x03\x02\x02\x02\u01CB\u01C5\x03" +
		"\x02\x02\x02\u01CB\u01C6\x03\x02\x02\x02\u01CB\u01C7\x03\x02\x02\x02\u01CB" +
		"\u01C8\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CA\x03\x02" +
		"\x02\x02\u01CC+\x03\x02\x02\x02\u01CD\u01CF\x07\x05\x02\x02\u01CE\u01CD" +
		"\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D2\x03\x02\x02\x02" +
		"\u01D0\u01D3\x05R*\x02\u01D1\u01D3\x071\x02\x02\u01D2\u01D0\x03\x02\x02" +
		"\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D5" +
		"\x07r\x02\x02\u01D5\u01DA\x05^0\x02\u01D6\u01D7\x07J\x02\x02\u01D7\u01D9" +
		"\x07K\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02" +
		"\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB\u01DF\x03" +
		"\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01DE\x07.\x02\x02\u01DE" +
		"\u01E0\x05\\/\x02\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02" +
		"\x02\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01E4\x05f4\x02\u01E2\u01E4\x07" +
		"L\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4" +
		"-\x03\x02\x02\x02\u01E5\u01E6\x05\x12\n\x02\u01E6\u01E7\x05,\x17\x02\u01E7" +
		"/\x03\x02\x02\x02\u01E8\u01E9\x07r\x02\x02\u01E9\u01EC\x05^0\x02\u01EA" +
		"\u01EB\x07.\x02\x02\u01EB\u01ED\x05\\/\x02\u01EC\u01EA\x03\x02\x02\x02" +
		"\u01EC\u01ED\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE\u01EF\x05" +
		"h5\x02\u01EF1\x03\x02\x02\x02\u01F0\u01F1\x05\x12\n\x02\u01F1\u01F2\x05" +
		"0\x19\x02\u01F23\x03\x02\x02\x02\u01F3\u01F4\x05R*\x02\u01F4\u01F5\x05" +
		"F$\x02\u01F5\u01F6\x07L\x02\x02\u01F65\x03\x02\x02\x02\u01F7\u01F8\x05" +
		"R*\x02\u01F8\u01F9\x05F$\x02\u01F9\u01FA\x058\x1D\x02\u01FA7\x03\x02\x02" +
		"\x02\u01FB\u01FC\x07H\x02\x02\u01FC\u01FE\x05\x94K\x02\u01FD\u01FF\x05" +
		"\x94K\x02\u01FE\u01FD\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF" +
		"\u0200\x03\x02\x02\x02\u0200\u0201\x07I\x02\x02\u02019\x03\x02\x02\x02" +
		"\u0202\u0204\x05\n\x06\x02\u0203\u0202\x03\x02\x02\x02\u0204\u0207\x03" +
		"\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206" +
		"\u0208\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02\u0208\u020B\x05<\x1F" +
		"\x02\u0209\u020B\x07L\x02\x02\u020A\u0205\x03\x02\x02\x02\u020A\u0209" +
		"\x03\x02\x02\x02\u020B;\x03\x02\x02\x02\u020C\u0214\x05> \x02\u020D\u0214" +
		"\x05B\"\x02\u020E\u0214\x05D#\x02\u020F\u0214\x05 \x11\x02\u0210\u0214" +
		"\x05z>\x02\u0211\u0214\x05\x10\t\x02\u0212\u0214\x05\x18\r\x02\u0213\u020C" +
		"\x03\x02\x02\x02\u0213\u020D\x03\x02\x02\x02\u0213\u020E\x03\x02\x02\x02" +
		"\u0213\u020F\x03\x02\x02\x02\u0213\u0210\x03\x02\x02\x02\u0213\u0211\x03" +
		"\x02\x02\x02\u0213\u0212\x03\x02\x02\x02\u0214=\x03\x02\x02\x02\u0215" +
		"\u0216\x05R*\x02\u0216\u021B\x05@!\x02\u0217\u0218\x07M\x02\x02\u0218" +
		"\u021A\x05@!\x02\u0219\u0217\x03\x02\x02\x02\u021A\u021D\x03\x02\x02\x02" +
		"\u021B\u0219\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C\u021E\x03" +
		"\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021E\u021F\x07L\x02\x02\u021F" +
		"?\x03\x02\x02\x02\u0220\u0225\x07r\x02\x02\u0221\u0222\x07J\x02\x02\u0222" +
		"\u0224\x07K\x02\x02\u0223\u0221\x03\x02\x02\x02\u0224\u0227\x03\x02\x02" +
		"\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0228" +
		"\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0228\u0229\x07O\x02\x02" +
		"\u0229\u022A\x05L\'\x02\u022AA\x03\x02\x02\x02\u022B\u022E\x05R*\x02\u022C" +
		"\u022E\x071\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D\u022C\x03\x02\x02" +
		"\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0230\x07r\x02\x02\u0230\u0235" +
		"\x05^0\x02\u0231\u0232\x07J\x02\x02\u0232\u0234\x07K\x02\x02\u0233\u0231" +
		"\x03\x02\x02\x02\u0234\u0237\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02" +
		"\u0235\u0236\x03\x02\x02\x02\u0236\u023A\x03\x02\x02\x02\u0237\u0235\x03" +
		"\x02\x02\x02\u0238\u0239\x07.\x02\x02\u0239\u023B\x05\\/\x02\u023A\u0238" +
		"\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023C\x03\x02\x02\x02" +
		"\u023C\u023D\x07L\x02\x02\u023DC\x03\x02\x02\x02\u023E\u023F\x05\x12\n" +
		"\x02\u023F\u0240\x05B\"\x02\u0240E\x03\x02\x02\x02\u0241\u0246\x05H%\x02" +
		"\u0242\u0243\x07M\x02\x02\u0243\u0245\x05H%\x02\u0244\u0242\x03\x02\x02" +
		"\x02\u0245\u0248\x03\x02\x02\x02\u0246\u0244\x03\x02\x02\x02\u0246\u0247" +
		"\x03\x02\x02\x02\u0247G\x03\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0249" +
		"\u024C\x05J&\x02\u024A\u024B\x07O\x02\x02\u024B\u024D\x05L\'\x02\u024C" +
		"\u024A\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024DI\x03\x02\x02" +
		"\x02\u024E\u0253\x07r\x02\x02\u024F\u0250\x07J\x02\x02\u0250\u0252\x07" +
		"K\x02\x02\u0251\u024F\x03\x02\x02\x02\u0252\u0255\x03\x02\x02\x02\u0253" +
		"\u0251\x03\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254K\x03\x02\x02" +
		"\x02\u0255\u0253\x03\x02\x02\x02\u0256\u0259\x05N(\x02\u0257\u0259\x05" +
		"\xBA^\x02\u0258\u0256\x03\x02\x02\x02\u0258\u0257\x03\x02\x02\x02\u0259" +
		"M\x03\x02\x02\x02\u025A\u0266\x07H\x02\x02\u025B\u0260\x05L\'\x02\u025C" +
		"\u025D\x07M\x02\x02\u025D\u025F\x05L\'\x02\u025E\u025C\x03\x02\x02\x02" +
		"\u025F\u0262\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02\u0260\u0261\x03" +
		"\x02\x02\x02\u0261\u0264\x03\x02\x02\x02\u0262\u0260\x03\x02\x02\x02\u0263" +
		"\u0265\x07M\x02\x02\u0264\u0263\x03\x02\x02\x02\u0264\u0265\x03\x02\x02" +
		"\x02\u0265\u0267\x03\x02\x02\x02\u0266\u025B\x03\x02\x02\x02\u0266\u0267" +
		"\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u0269\x07I\x02\x02" +
		"\u0269O\x03\x02\x02\x02\u026A\u026B\x07r\x02\x02\u026BQ\x03\x02\x02\x02" +
		"\u026C\u0271\x05T+\x02\u026D\u026E\x07J\x02\x02\u026E\u0270\x07K\x02\x02" +
		"\u026F\u026D\x03\x02\x02\x02\u0270\u0273\x03\x02\x02\x02\u0271\u026F\x03" +
		"\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u027D\x03\x02\x02\x02\u0273" +
		"\u0271\x03\x02\x02\x02\u0274\u0279\x05V,\x02\u0275\u0276\x07J\x02\x02" +
		"\u0276\u0278\x07K\x02\x02\u0277\u0275\x03\x02\x02\x02\u0278\u027B\x03" +
		"\x02\x02\x02\u0279\u0277\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A" +
		"\u027D\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027C\u026C\x03\x02" +
		"\x02\x02\u027C\u0274\x03\x02\x02\x02\u027DS\x03\x02\x02\x02\u027E\u0280" +
		"\x07r\x02\x02\u027F\u0281\x05X-\x02\u0280\u027F\x03\x02\x02\x02\u0280" +
		"\u0281\x03\x02\x02\x02\u0281\u0289\x03\x02\x02\x02\u0282\u0283\x07N\x02" +
		"\x02\u0283\u0285\x07r\x02\x02\u0284\u0286\x05X-\x02\u0285\u0284\x03\x02" +
		"\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0288\x03\x02\x02\x02\u0287" +
		"\u0282\x03\x02\x02\x02\u0288\u028B\x03\x02\x02\x02\u0289\u0287\x03\x02" +
		"\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028F\x03\x02\x02\x02\u028B" +
		"\u0289\x03\x02\x02\x02\u028C\u028D\x07\x07\x02\x02\u028D\u028F\x05X-\x02" +
		"\u028E\u027E\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028FU\x03\x02" +
		"\x02\x02\u0290\u0291\t\x02\x02\x02\u0291W\x03\x02\x02\x02\u0292\u0293" +
		"\x07Q\x02\x02\u0293\u0298\x05Z.\x02\u0294\u0295\x07M\x02\x02\u0295\u0297" +
		"\x05Z.\x02\u0296\u0294\x03\x02\x02\x02\u0297\u029A\x03\x02\x02\x02\u0298" +
		"\u0296\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029B\x03\x02" +
		"\x02\x02\u029A\u0298\x03\x02\x02\x02\u029B\u029C\x07P\x02\x02\u029CY\x03" +
		"\x02\x02\x02\u029D\u02A4\x05R*\x02\u029E\u02A1\x07T\x02\x02\u029F\u02A0" +
		"\t\x03\x02\x02\u02A0\u02A2\x05R*\x02\u02A1\u029F\x03\x02\x02\x02\u02A1" +
		"\u02A2\x03\x02\x02\x02\u02A2\u02A4\x03\x02\x02\x02\u02A3\u029D\x03\x02" +
		"\x02\x02\u02A3\u029E\x03\x02\x02\x02\u02A4[\x03\x02\x02\x02\u02A5\u02AA" +
		"\x05j6\x02\u02A6\u02A7\x07M\x02\x02\u02A7\u02A9\x05j6\x02\u02A8\u02A6" +
		"\x03\x02\x02\x02\u02A9\u02AC\x03\x02\x02\x02\u02AA\u02A8\x03\x02\x02\x02" +
		"\u02AA\u02AB\x03\x02\x02\x02\u02AB]\x03\x02\x02\x02\u02AC\u02AA\x03\x02" +
		"\x02\x02\u02AD\u02AF\x07F\x02\x02\u02AE\u02B0\x05`1\x02\u02AF\u02AE\x03" +
		"\x02\x02\x02\u02AF\u02B0\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1" +
		"\u02B2\x07G\x02\x02\u02B2_\x03\x02\x02\x02\u02B3\u02B8\x05b2\x02\u02B4" +
		"\u02B5\x07M\x02\x02\u02B5\u02B7\x05b2\x02\u02B6\u02B4\x03\x02\x02\x02" +
		"\u02B7\u02BA\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02\u02B8\u02B9\x03" +
		"\x02\x02\x02\u02B9\u02BD\x03\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BB" +
		"\u02BC\x07M\x02\x02\u02BC\u02BE\x05d3\x02\u02BD\u02BB\x03\x02\x02\x02" +
		"\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02C1\x03\x02\x02\x02\u02BF\u02C1\x05" +
		"d3\x02\u02C0\u02B3\x03\x02\x02\x02\u02C0\u02BF\x03\x02\x02\x02\u02C1a" +
		"\x03\x02\x02\x02\u02C2\u02C4\x05\x0E\b\x02\u02C3\u02C2\x03\x02\x02\x02" +
		"\u02C4\u02C7\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5\u02C6\x03" +
		"\x02\x02\x02\u02C6\u02C8\x03\x02\x02\x02\u02C7\u02C5\x03\x02\x02\x02\u02C8" +
		"\u02C9\x05R*\x02\u02C9\u02CA\x05J&\x02\u02CAc\x03\x02\x02\x02\u02CB\u02CD" +
		"\x05\x0E\b\x02\u02CC\u02CB\x03\x02\x02\x02\u02CD\u02D0\x03\x02\x02\x02" +
		"\u02CE\u02CC\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D1\x03" +
		"\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D1\u02D2\x05R*\x02\u02D2\u02D3" +
		"\x07t\x02\x02\u02D3\u02D4\x05J&\x02\u02D4e\x03\x02\x02\x02\u02D5\u02D6" +
		"\x05\x8AF\x02\u02D6g\x03\x02\x02\x02\u02D7\u02D8\x05\x8AF\x02\u02D8i\x03" +
		"\x02\x02\x02\u02D9\u02DE\x07r\x02\x02\u02DA\u02DB\x07N\x02\x02\u02DB\u02DD" +
		"\x07r\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DD\u02E0\x03\x02\x02\x02" +
		"\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DFk\x03\x02" +
		"\x02\x02\u02E0\u02DE\x03\x02\x02\x02\u02E1\u02E2\t\x04\x02\x02\u02E2m" +
		"\x03\x02\x02\x02\u02E3\u02E4\x07s\x02\x02\u02E4\u02EB\x05p9\x02\u02E5" +
		"\u02E8\x07F\x02\x02\u02E6\u02E9\x05r:\x02\u02E7\u02E9\x05v<\x02\u02E8" +
		"\u02E6\x03\x02\x02\x02\u02E8\u02E7\x03\x02\x02\x02\u02E8\u02E9\x03\x02" +
		"\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\u02EC\x07G\x02\x02\u02EB\u02E5" +
		"\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02\u02ECo\x03\x02\x02\x02\u02ED" +
		"\u02EE\x05j6\x02\u02EEq\x03\x02\x02\x02\u02EF\u02F6\x05t;\x02\u02F0\u02F2" +
		"\x07M\x02\x02\u02F1\u02F0\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02" +
		"\u02F2\u02F3\x03\x02\x02\x02\u02F3\u02F5\x05t;\x02\u02F4\u02F1\x03\x02" +
		"\x02\x02\u02F5\u02F8\x03\x02\x02\x02\u02F6\u02F4\x03\x02\x02\x02\u02F6" +
		"\u02F7\x03\x02\x02\x02\u02F7s\x03\x02\x02\x02\u02F8\u02F6\x03\x02\x02" +
		"\x02\u02F9\u02FA\x07r\x02\x02\u02FA\u02FB\x07O\x02\x02\u02FB\u02FC\x05" +
		"v<\x02\u02FCu\x03\x02\x02\x02\u02FD\u0301\x05\xBA^\x02\u02FE\u0301\x05" +
		"n8\x02\u02FF\u0301\x05x=\x02\u0300\u02FD\x03\x02\x02\x02\u0300\u02FE\x03" +
		"\x02\x02\x02\u0300\u02FF\x03\x02\x02\x02\u0301w\x03\x02\x02\x02\u0302" +
		"\u030B\x07H\x02\x02\u0303\u0308\x05v<\x02\u0304\u0305\x07M\x02\x02\u0305" +
		"\u0307\x05v<\x02\u0306\u0304\x03\x02\x02\x02\u0307\u030A\x03\x02\x02\x02" +
		"\u0308\u0306\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030C\x03" +
		"\x02\x02\x02\u030A\u0308\x03\x02\x02\x02\u030B\u0303\x03\x02\x02\x02\u030B" +
		"\u030C\x03\x02\x02\x02\u030C\u030E\x03\x02\x02\x02\u030D\u030F\x07M\x02" +
		"\x02\u030E\u030D\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F\u0310" +
		"\x03\x02\x02\x02\u0310\u0311\x07I\x02\x02\u0311y\x03\x02\x02\x02\u0312" +
		"\u0313\x07s\x02\x02\u0313\u0314\x07 \x02\x02\u0314\u0315\x07r\x02\x02" +
		"\u0315\u0316\x05|?\x02\u0316{\x03\x02\x02\x02\u0317\u031B\x07H\x02\x02" +
		"\u0318\u031A\x05~@\x02\u0319\u0318\x03\x02\x02\x02\u031A\u031D\x03\x02" +
		"\x02\x02\u031B\u0319\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C" +
		"\u031E\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031E\u031F\x07I\x02" +
		"\x02\u031F}\x03\x02\x02\x02\u0320\u0322\x05\n\x06\x02\u0321\u0320\x03" +
		"\x02\x02\x02\u0322\u0325\x03\x02\x02\x02\u0323\u0321\x03\x02\x02\x02\u0323" +
		"\u0324\x03\x02\x02\x02\u0324\u0326\x03\x02\x02\x02\u0325\u0323\x03\x02" +
		"\x02\x02\u0326\u0329\x05\x80A\x02\u0327\u0329\x07L\x02\x02\u0328\u0323" +
		"\x03\x02\x02\x02\u0328\u0327\x03\x02\x02\x02\u0329\x7F\x03\x02\x02\x02" +
		"\u032A\u032B\x05R*\x02\u032B\u032C\x05\x82B\x02\u032C\u032D\x07L\x02\x02" +
		"\u032D\u033F\x03\x02\x02\x02\u032E\u0330\x05\x10\t\x02\u032F\u0331\x07" +
		"L\x02\x02\u0330\u032F\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331" +
		"\u033F\x03\x02\x02\x02\u0332\u0334\x05 \x11\x02\u0333\u0335\x07L\x02\x02" +
		"\u0334\u0333\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335\u033F\x03" +
		"\x02\x02\x02\u0336\u0338\x05\x18\r\x02\u0337\u0339\x07L\x02\x02\u0338" +
		"\u0337\x03\x02\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\u033F\x03\x02" +
		"\x02\x02\u033A\u033C\x05z>\x02\u033B\u033D\x07L\x02\x02\u033C\u033B\x03" +
		"\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D\u033F\x03\x02\x02\x02\u033E" +
		"\u032A\x03\x02\x02\x02\u033E\u032E\x03\x02\x02\x02\u033E\u0332\x03\x02" +
		"\x02\x02\u033E\u0336\x03\x02\x02\x02\u033E\u033A\x03\x02\x02\x02\u033F" +
		"\x81\x03\x02\x02\x02\u0340\u0343\x05\x84C\x02\u0341\u0343\x05\x86D\x02" +
		"\u0342\u0340\x03\x02\x02\x02\u0342\u0341\x03\x02\x02\x02\u0343\x83\x03" +
		"\x02\x02\x02\u0344\u0345\x07r\x02\x02\u0345\u0346\x07F\x02\x02\u0346\u0348" +
		"\x07G\x02\x02\u0347\u0349\x05\x88E\x02\u0348\u0347\x03\x02\x02\x02\u0348" +
		"\u0349\x03\x02\x02\x02\u0349\x85\x03\x02\x02\x02\u034A\u034B\x05F$\x02" +
		"\u034B\x87\x03\x02\x02\x02\u034C\u034D\x07\x11\x02\x02\u034D\u034E\x05" +
		"v<\x02\u034E\x89\x03\x02\x02\x02\u034F\u0353\x07H\x02\x02\u0350\u0352" +
		"\x05\x8CG\x02\u0351\u0350\x03\x02\x02\x02\u0352\u0355\x03\x02\x02\x02" +
		"\u0353\u0351\x03\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354\u0356\x03" +
		"\x02\x02\x02\u0355\u0353\x03\x02\x02\x02\u0356\u0357\x07I\x02\x02\u0357" +
		"\x8B\x03\x02\x02\x02\u0358\u035C\x05\x8EH\x02\u0359\u035C\x05\x92J\x02" +
		"\u035A\u035C\x05\b\x05\x02\u035B\u0358\x03\x02\x02\x02\u035B\u0359\x03" +
		"\x02\x02\x02\u035B\u035A\x03\x02\x02\x02\u035C\x8D\x03\x02\x02\x02\u035D" +
		"\u035E\x05\x90I\x02\u035E\u035F\x07L\x02\x02\u035F\x8F\x03\x02\x02\x02" +
		"\u0360\u0362\x05\x0E\b\x02\u0361\u0360\x03\x02\x02\x02\u0362\u0365\x03" +
		"\x02\x02\x02\u0363\u0361\x03\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364" +
		"\u0366\x03\x02\x02\x02\u0365\u0363\x03\x02\x02\x02\u0366\u0367\x05R*\x02" +
		"\u0367\u0368\x05F$\x02\u0368\x91\x03\x02\x02\x02\u0369\u03BE\x05\x8AF" +
		"\x02\u036A\u036B\x07\x1A\x02\x02\u036B\u036C\x05\xAEX\x02\u036C\u036F" +
		"\x05\x92J\x02\u036D\u036E\x07\x13\x02\x02\u036E\u0370\x05\x92J\x02\u036F" +
		"\u036D\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u03BE\x03\x02" +
		"\x02\x02\u0371\u0372\x07\x19\x02\x02\u0372\u0373\x07F\x02\x02\u0373\u0374" +
		"\x05\xA6T\x02\u0374\u0375\x07G\x02\x02\u0375\u0376\x05\x92J\x02\u0376" +
		"\u03BE\x03\x02\x02\x02\u0377\u0378\x073\x02\x02\u0378\u0379\x05\xAEX\x02" +
		"\u0379\u037A\x05\x92J\x02\u037A\u03BE\x03\x02\x02\x02\u037B\u037C\x07" +
		"\x12\x02\x02\u037C\u037D\x05\x92J\x02\u037D\u037E\x073\x02\x02\u037E\u037F" +
		"\x05\xAEX\x02\u037F\u0380\x07L\x02\x02\u0380\u03BE\x03\x02\x02\x02\u0381" +
		"\u0382\x07?\x02\x02\u0382\u0383\x07F\x02\x02\u0383\u0384\x05\xBA^\x02" +
		"\u0384\u0385\x07G\x02\x02\u0385\u0386\x05\x92J\x02\u0386\u03BE\x03\x02" +
		"\x02\x02\u0387\u0388\x070\x02\x02\u0388\u0392\x05\x8AF\x02\u0389\u038B" +
		"\x05\x9AN\x02\u038A\u0389\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02" +
		"\u038C\u038A\x03\x02\x02\x02\u038C\u038D\x03\x02\x02\x02\u038D\u038F\x03" +
		"\x02\x02\x02\u038E\u0390\x05\x9EP\x02\u038F\u038E\x03\x02\x02\x02\u038F" +
		"\u0390\x03\x02\x02\x02\u0390\u0393\x03\x02\x02\x02\u0391\u0393\x05\x9E" +
		"P\x02\u0392\u038A\x03\x02\x02\x02\u0392\u0391\x03\x02\x02\x02\u0393\u03BE" +
		"\x03\x02\x02\x02\u0394\u0395\x070\x02\x02\u0395\u0396\x05\xA0Q\x02\u0396" +
		"\u039A\x05\x8AF\x02\u0397\u0399\x05\x9AN\x02\u0398\u0397\x03\x02\x02\x02" +
		"\u0399\u039C\x03\x02\x02\x02\u039A\u0398\x03\x02\x02\x02\u039A\u039B\x03" +
		"\x02\x02\x02\u039B\u039E\x03\x02\x02\x02\u039C\u039A\x03\x02\x02\x02\u039D" +
		"\u039F\x05\x9EP\x02\u039E\u039D\x03\x02\x02\x02\u039E\u039F\x03\x02\x02" +
		"\x02\u039F\u03BE\x03\x02\x02\x02\u03A0\u03A2\x07\'\x02\x02\u03A1\u03A3" +
		"\x05\xBA^\x02\u03A2\u03A1\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02" +
		"\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03BE\x07L\x02\x02\u03A5\u03A6\x07" +
		"-\x02\x02\u03A6\u03A7\x05\xBA^\x02\u03A7\u03A8\x07L\x02\x02\u03A8\u03BE" +
		"\x03\x02\x02\x02\u03A9\u03AB\x07\n\x02\x02\u03AA\u03AC\x07r\x02\x02\u03AB" +
		"\u03AA\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC\u03AD\x03\x02" +
		"\x02\x02\u03AD\u03BE\x07L\x02\x02\u03AE\u03B0\x07\x10\x02\x02\u03AF\u03B1" +
		"\x07r\x02\x02\u03B0\u03AF\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02" +
		"\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03BE\x07L\x02\x02\u03B3\u03BE\x07" +
		"L\x02\x02\u03B4\u03B5\x05\xB2Z\x02\u03B5\u03B6\x07L\x02\x02\u03B6\u03BE" +
		"\x03\x02\x02\x02\u03B7\u03B8\x07r\x02\x02\u03B8\u03B9\x07U\x02\x02\u03B9" +
		"\u03BE\x05\x92J\x02\u03BA\u03BB\x05\xB8]\x02\u03BB\u03BC\x07L\x02\x02" +
		"\u03BC\u03BE\x03\x02\x02\x02\u03BD\u0369\x03\x02\x02\x02\u03BD\u036A\x03" +
		"\x02\x02\x02\u03BD\u0371\x03\x02\x02\x02\u03BD\u0377\x03\x02\x02\x02\u03BD" +
		"\u037B\x03\x02\x02\x02\u03BD\u0381\x03\x02\x02\x02\u03BD\u0387\x03\x02" +
		"\x02\x02\u03BD\u0394\x03\x02\x02\x02\u03BD\u03A0\x03\x02\x02\x02\u03BD" +
		"\u03A5\x03\x02\x02\x02\u03BD\u03A9\x03\x02\x02\x02\u03BD\u03AE\x03\x02" +
		"\x02\x02\u03BD\u03B3\x03\x02\x02\x02\u03BD\u03B4\x03\x02\x02\x02\u03BD" +
		"\u03B7\x03\x02\x02\x02\u03BD\u03BA\x03\x02\x02\x02\u03BE\x93\x03\x02\x02" +
		"\x02\u03BF\u03C1\x05\n\x06\x02\u03C0\u03BF\x03\x02\x02\x02\u03C1\u03C4" +
		"\x03\x02\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C2\u03C3\x03\x02\x02\x02" +
		"\u03C3\u03C7\x03\x02\x02\x02\u03C4\u03C2\x03\x02\x02\x02\u03C5\u03C8\x05" +
		"\x96L\x02\u03C6\u03C8\x05\x98M\x02\u03C7\u03C5\x03\x02\x02\x02\u03C7\u03C6" +
		"\x03\x02\x02\x02\u03C8\x95\x03\x02\x02\x02\u03C9\u03CC\x07\b\x02\x02\u03CA" +
		"\u03CD\x07L\x02\x02\u03CB\u03CD\x05f4\x02\u03CC\u03CA\x03\x02\x02\x02" +
		"\u03CC\u03CB\x03\x02\x02\x02\u03CD\x97\x03\x02\x02\x02\u03CE\u03D1\x07" +
		"\x07\x02\x02\u03CF\u03D2\x07L\x02\x02\u03D0\u03D2\x05f4\x02\u03D1\u03CF" +
		"\x03\x02\x02\x02\u03D1\u03D0\x03\x02\x02\x02\u03D2\x99\x03\x02\x02\x02" +
		"\u03D3\u03D4\x07\f\x02\x02\u03D4\u03D8\x07F\x02\x02\u03D5\u03D7\x05\x0E" +
		"\b\x02\u03D6\u03D5\x03\x02\x02\x02\u03D7\u03DA\x03\x02\x02\x02\u03D8\u03D6" +
		"\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9\u03DB\x03\x02\x02\x02" +
		"\u03DA\u03D8\x03\x02\x02\x02\u03DB\u03DC\x05\x9CO\x02\u03DC\u03DD\x07" +
		"r\x02\x02\u03DD\u03DE\x07G\x02\x02\u03DE\u03DF\x05\x8AF\x02\u03DF\x9B" +
		"\x03\x02\x02\x02\u03E0\u03E5\x05j6\x02\u03E1\u03E2\x07c\x02\x02\u03E2" +
		"\u03E4\x05j6\x02\u03E3\u03E1\x03\x02\x02\x02\u03E4\u03E7\x03\x02\x02\x02" +
		"\u03E5\u03E3\x03\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6\x9D\x03" +
		"\x02\x02\x02\u03E7\u03E5\x03\x02\x02\x02\u03E8\u03E9\x07\x17\x02\x02\u03E9" +
		"\u03EA\x05\x8AF\x02\u03EA\x9F\x03\x02\x02\x02\u03EB\u03EC\x07F\x02\x02" +
		"\u03EC\u03EE\x05\xA2R\x02\u03ED\u03EF\x07L\x02\x02\u03EE\u03ED\x03\x02" +
		"\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0" +
		"\u03F1\x07G\x02\x02\u03F1\xA1\x03\x02\x02\x02\u03F2\u03F7\x05\xA4S\x02" +
		"\u03F3\u03F4\x07L\x02\x02\u03F4\u03F6\x05\xA4S\x02\u03F5\u03F3\x03\x02" +
		"\x02\x02\u03F6\u03F9\x03\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F7" +
		"\u03F8\x03\x02\x02\x02\u03F8\xA3\x03\x02\x02\x02\u03F9\u03F7\x03\x02\x02" +
		"\x02\u03FA\u03FC\x05\x0E\b\x02\u03FB\u03FA\x03\x02\x02\x02\u03FC\u03FF" +
		"\x03\x02\x02\x02\u03FD\u03FB\x03\x02\x02\x02\u03FD\u03FE\x03\x02\x02\x02" +
		"\u03FE\u0400\x03\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02\u0400\u0401\x05" +
		"T+\x02\u0401\u0402\x05J&\x02\u0402\u0403\x07O\x02\x02\u0403\u0404\x05" +
		"\xBA^\x02\u0404\xA5\x03\x02\x02\x02\u0405\u0412\x05\xAAV\x02\u0406\u0408" +
		"\x05\xA8U\x02\u0407\u0406\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02" +
		"\u0408\u0409\x03\x02\x02\x02\u0409\u040B\x07L\x02\x02\u040A\u040C\x05" +
		"\xBA^\x02\u040B\u040A\x03\x02\x02\x02\u040B\u040C\x03\x02\x02\x02\u040C" +
		"\u040D\x03\x02\x02\x02\u040D\u040F\x07L\x02\x02\u040E\u0410\x05\xACW\x02" +
		"\u040F\u040E\x03\x02\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0412\x03" +
		"\x02\x02\x02\u0411\u0405\x03\x02\x02\x02\u0411\u0407\x03\x02\x02\x02\u0412" +
		"\xA7\x03\x02\x02\x02\u0413\u0416\x05\x90I\x02\u0414\u0416\x05\xB0Y\x02" +
		"\u0415\u0413\x03\x02\x02\x02\u0415\u0414\x03\x02\x02\x02\u0416\xA9\x03" +
		"\x02\x02\x02\u0417\u0419\x05\x0E\b\x02\u0418\u0417\x03\x02\x02\x02\u0419" +
		"\u041C\x03\x02\x02\x02\u041A";
	private static readonly _serializedATNSegment2: string =
		"\u0418\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B\u041D\x03\x02" +
		"\x02\x02\u041C\u041A\x03\x02\x02\x02\u041D\u041E\x05R*\x02\u041E\u041F" +
		"\x05J&\x02\u041F\u0420\x07U\x02\x02\u0420\u0421\x05\xBA^\x02\u0421\xAB" +
		"\x03\x02\x02\x02\u0422\u0423\x05\xB0Y\x02\u0423\xAD\x03\x02\x02\x02\u0424" +
		"\u0425\x07F\x02\x02\u0425\u0426\x05\xBA^\x02\u0426\u0427\x07G\x02\x02" +
		"\u0427\xAF\x03\x02\x02\x02\u0428\u042D\x05\xBA^\x02\u0429\u042A\x07M\x02" +
		"\x02\u042A\u042C\x05\xBA^\x02\u042B\u0429\x03\x02\x02\x02\u042C\u042F" +
		"\x03\x02\x02\x02\u042D\u042B\x03\x02\x02\x02\u042D\u042E\x03\x02\x02\x02" +
		"\u042E\xB1\x03\x02\x02\x02\u042F\u042D\x03\x02\x02\x02\u0430\u0431\x05" +
		"\xBA^\x02\u0431\xB3\x03\x02\x02\x02\u0432\u0433\x05\xBA^\x02\u0433\xB5" +
		"\x03\x02\x02\x02\u0434\u0435\x07:\x02\x02\u0435\u0439\x05\xBA^\x02\u0436" +
		"\u0438\x05\xBA^\x02\u0437\u0436\x03\x02\x02\x02\u0438\u043B\x03\x02\x02" +
		"\x02\u0439\u0437\x03\x02\x02\x02\u0439\u043A\x03\x02\x02\x02\u043A\xB7" +
		"\x03\x02\x02\x02\u043B\u0439\x03\x02\x02\x02\u043C\u043D\t\x05\x02\x02" +
		"\u043D\u0440\x05\xBA^\x02\u043E\u0440\x05\xB6\\\x02\u043F\u043C\x03\x02" +
		"\x02\x02\u043F\u043E\x03\x02\x02\x02\u0440\xB9\x03\x02\x02\x02\u0441\u0442" +
		"\b^\x01\x02\u0442\u044F\x05\xBC_\x02\u0443\u0444\x07\"\x02\x02\u0444\u044F" +
		"\x05\xBE`\x02\u0445\u0446\x07F\x02\x02\u0446\u0447\x05R*\x02\u0447\u0448" +
		"\x07G\x02\x02\u0448\u0449\x05\xBA^\x13\u0449\u044F\x03\x02\x02\x02\u044A" +
		"\u044B\t\x06\x02\x02\u044B\u044F\x05\xBA^\x11\u044C\u044D\t\x07\x02\x02" +
		"\u044D\u044F\x05\xBA^\x10\u044E\u0441\x03\x02\x02\x02\u044E\u0443\x03" +
		"\x02\x02\x02\u044E\u0445\x03\x02\x02\x02\u044E\u044A\x03\x02\x02\x02\u044E" +
		"\u044C\x03\x02\x02\x02\u044F\u04B7\x03\x02\x02\x02\u0450\u0451\f\x0F\x02" +
		"\x02\u0451\u0452\t\b\x02\x02\u0452\u04B6\x05\xBA^\x10\u0453\u0454\f\x0E" +
		"\x02\x02\u0454\u0455\t\t\x02\x02\u0455\u04B6\x05\xBA^\x0F\u0456\u045E" +
		"\f\r\x02\x02\u0457\u0458\x07Q\x02\x02\u0458\u045F\x07Q\x02\x02\u0459\u045A" +
		"\x07P\x02\x02\u045A\u045B\x07P\x02\x02\u045B\u045F\x07P\x02\x02\u045C" +
		"\u045D\x07P\x02\x02\u045D\u045F\x07P\x02\x02\u045E\u0457\x03\x02\x02\x02" +
		"\u045E\u0459\x03\x02\x02\x02\u045E\u045C\x03\x02\x02\x02\u045F\u0460\x03" +
		"\x02\x02\x02\u0460\u04B6\x05\xBA^\x0E\u0461\u0462\f\f\x02\x02\u0462\u0463" +
		"\t\n\x02\x02\u0463\u04B6\x05\xBA^\r\u0464\u0465\f\n\x02\x02\u0465\u0466" +
		"\t\v\x02\x02\u0466\u04B6\x05\xBA^\v\u0467\u0468\f\t\x02\x02\u0468\u0469" +
		"\x07b\x02\x02\u0469\u04B6\x05\xBA^\n\u046A\u046B\f\b\x02\x02\u046B\u046C" +
		"\x07d\x02\x02\u046C\u04B6\x05\xBA^\t\u046D\u046E\f\x07\x02\x02\u046E\u046F" +
		"\x07c\x02\x02\u046F\u04B6\x05\xBA^\b\u0470\u0471\f\x06\x02\x02\u0471\u0472" +
		"\x07Z\x02\x02\u0472\u04B6\x05\xBA^\x07\u0473\u0474\f\x05\x02\x02\u0474" +
		"\u0475\x07[\x02\x02\u0475\u04B6\x05\xBA^\x06\u0476\u0477\f\x04\x02\x02" +
		"\u0477\u0478\x07T\x02\x02\u0478\u0479\x05\xBA^\x02\u0479\u047A\x07U\x02" +
		"\x02\u047A\u047B\x05\xBA^\x05\u047B\u04B6\x03\x02\x02\x02\u047C\u047D" +
		"\f\x03\x02\x02\u047D\u047E\t\f\x02\x02\u047E\u04B6\x05\xBA^\x03\u047F" +
		"\u0480\f\x1E\x02\x02\u0480\u0481\x07N\x02\x02\u0481\u0482\x07\b\x02\x02" +
		"\u0482\u0484\x07F\x02\x02\u0483\u0485\x05\xB0Y\x02\u0484\u0483\x03\x02" +
		"\x02\x02\u0484\u0485\x03\x02\x02\x02\u0485\u0486\x03\x02\x02\x02\u0486" +
		"\u04B6\x07G\x02\x02\u0487\u0488\f\x1D\x02\x02\u0488\u0489\x07N\x02\x02" +
		"\u0489\u048A\x07\x07\x02\x02\u048A\u048C\x07F\x02\x02\u048B\u048D\x05" +
		"\xB0Y\x02\u048C\u048B\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D" +
		"\u048E\x03\x02\x02\x02\u048E\u04B6\x07G\x02\x02\u048F\u0491\f\x1C\x02" +
		"\x02\u0490\u0492\x07T\x02\x02\u0491\u0490\x03\x02\x02\x02\u0491\u0492" +
		"\x03\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0494\x07N\x02\x02" +
		"\u0494\u04B6\x07r\x02\x02\u0495\u0496\f\x1B\x02\x02\u0496\u0497\x07N\x02" +
		"\x02\u0497\u04B6\x07,\x02\x02\u0498\u0499\f\x1A\x02\x02\u0499\u049A\x07" +
		"N\x02\x02\u049A\u04B6\x07\"\x02\x02\u049B\u049C\f\x19\x02\x02\u049C\u049D" +
		"\x07N\x02\x02\u049D\u04B6\t\r\x02\x02\u049E\u049F\f\x18\x02\x02\u049F" +
		"\u04A0\x07N\x02\x02\u04A0\u04A1\x07*\x02\x02\u04A1\u04B6\x05\xD4k\x02" +
		"\u04A2\u04A3\f\x17\x02\x02\u04A3\u04A4\x07N\x02\x02\u04A4\u04B6\x05\xCC" +
		"g\x02\u04A5\u04A6\f\x16\x02\x02\u04A6\u04A7\x07J\x02\x02\u04A7\u04A8\x05" +
		"\xBA^\x02\u04A8\u04A9\x07K\x02\x02\u04A9\u04B6\x03\x02\x02\x02\u04AA\u04AB" +
		"\f\x15\x02\x02\u04AB\u04AD\x07F\x02\x02\u04AC\u04AE\x05\xB0Y\x02\u04AD" +
		"\u04AC\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02\u04AE\u04AF\x03\x02" +
		"\x02\x02\u04AF\u04B6\x07G\x02\x02\u04B0\u04B1\f\x12\x02\x02\u04B1\u04B6" +
		"\t\x0E\x02\x02\u04B2\u04B3\f\v\x02\x02\u04B3\u04B4\x07\x1E\x02\x02\u04B4" +
		"\u04B6\x05R*\x02\u04B5\u0450\x03\x02\x02\x02\u04B5\u0453\x03\x02\x02\x02" +
		"\u04B5\u0456\x03\x02\x02\x02\u04B5\u0461\x03\x02\x02\x02\u04B5\u0464\x03" +
		"\x02\x02\x02\u04B5\u0467\x03\x02\x02\x02\u04B5\u046A\x03\x02\x02\x02\u04B5" +
		"\u046D\x03\x02\x02\x02\u04B5\u0470\x03\x02\x02\x02\u04B5\u0473\x03\x02" +
		"\x02\x02\u04B5\u0476\x03\x02\x02\x02\u04B5\u047C\x03\x02\x02\x02\u04B5" +
		"\u047F\x03\x02\x02\x02\u04B5\u0487\x03\x02\x02\x02\u04B5\u048F\x03\x02" +
		"\x02\x02\u04B5\u0495\x03\x02\x02\x02\u04B5\u0498\x03\x02\x02\x02\u04B5" +
		"\u049B\x03\x02\x02\x02\u04B5\u049E\x03\x02\x02\x02\u04B5\u04A2\x03\x02" +
		"\x02\x02\u04B5\u04A5\x03\x02\x02\x02\u04B5\u04AA\x03\x02\x02\x02\u04B5" +
		"\u04B0\x03\x02\x02\x02\u04B5\u04B2\x03\x02\x02\x02\u04B6\u04B9\x03\x02" +
		"\x02\x02\u04B7\u04B5\x03\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8" +
		"\xBB\x03\x02\x02\x02\u04B9\u04B7\x03\x02\x02\x02\u04BA\u04BB\x07F\x02" +
		"\x02\u04BB\u04BC\x05\xBA^\x02\u04BC\u04BD\x07G\x02\x02\u04BD\u04D1\x03" +
		"\x02\x02\x02\u04BE\u04D1\x07,\x02\x02\u04BF\u04D1\x07*\x02\x02\u04C0\u04D1" +
		"\x05l7\x02\u04C1\u04D1\x07r\x02\x02\u04C2\u04C3\x05R*\x02\u04C3\u04C4" +
		"\x07N\x02\x02\u04C4\u04C5\x07\x0E\x02\x02\u04C5\u04D1\x03\x02\x02\x02" +
		"\u04C6\u04C7\x071\x02\x02\u04C7\u04C8\x07N\x02\x02\u04C8\u04D1\x07\x0E" +
		"\x02\x02\u04C9\u04CD\x05\xCEh\x02\u04CA\u04CE\x05\xD6l\x02\u04CB\u04CC" +
		"\x07,\x02\x02\u04CC\u04CE\x05\xD8m\x02\u04CD\u04CA\x03\x02\x02\x02\u04CD" +
		"\u04CB\x03\x02\x02\x02\u04CE\u04D1\x03\x02\x02\x02\u04CF\u04D1\x07\x04" +
		"\x02\x02\u04D0\u04BA\x03\x02\x02\x02\u04D0\u04BE\x03\x02\x02\x02\u04D0" +
		"\u04BF\x03\x02\x02\x02\u04D0\u04C0\x03\x02\x02\x02\u04D0\u04C1\x03\x02" +
		"\x02\x02\u04D0\u04C2\x03\x02\x02\x02\u04D0\u04C6\x03\x02\x02\x02\u04D0" +
		"\u04C9\x03\x02\x02\x02\u04D0\u04CF\x03\x02\x02\x02\u04D1\xBD\x03\x02\x02" +
		"\x02\u04D2\u04D3\x05\xCEh\x02\u04D3\u04D4\x05\xC0a\x02\u04D4\u04D5\x05" +
		"\xCAf\x02\u04D5\u04DE\x03\x02\x02\x02\u04D6\u04DB\x05\xC0a\x02\u04D7\u04DC" +
		"\x05\xC4c\x02\u04D8\u04DC\x05\xCAf\x02\u04D9\u04DC\x05\xC6d\x02\u04DA" +
		"\u04DC\x05\xC8e\x02\u04DB\u04D7\x03\x02\x02\x02\u04DB\u04D8\x03\x02\x02" +
		"\x02\u04DB\u04D9\x03\x02\x02\x02\u04DB\u04DA\x03\x02\x02\x02\u04DC\u04DE" +
		"\x03\x02\x02\x02\u04DD\u04D2\x03\x02\x02\x02\u04DD\u04D6\x03\x02\x02\x02" +
		"\u04DE\xBF\x03\x02\x02\x02\u04DF\u04E1\x07r\x02\x02\u04E0\u04E2\x05\xD0" +
		"i\x02\u04E1\u04E0\x03\x02\x02\x02\u04E1\u04E2\x03\x02\x02\x02\u04E2\u04EA" +
		"\x03\x02\x02\x02\u04E3\u04E4\x07N\x02\x02\u04E4\u04E6\x07r\x02\x02\u04E5" +
		"\u04E7\x05\xD0i\x02\u04E6\u04E5\x03\x02\x02\x02\u04E6\u04E7\x03\x02\x02" +
		"\x02\u04E7\u04E9\x03\x02\x02\x02\u04E8\u04E3\x03\x02\x02\x02\u04E9\u04EC" +
		"\x03\x02\x02\x02\u04EA\u04E8\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02" +
		"\u04EB\u04F1\x03\x02\x02\x02\u04EC\u04EA\x03\x02\x02\x02\u04ED\u04F1\x05" +
		"V,\x02\u04EE\u04EF\x07\x07\x02\x02\u04EF\u04F1\x05\xD0i\x02\u04F0\u04DF" +
		"\x03\x02\x02\x02\u04F0\u04ED\x03\x02\x02\x02\u04F0\u04EE\x03\x02\x02\x02" +
		"\u04F1\xC1\x03\x02\x02\x02\u04F2\u04F4\x07r\x02\x02\u04F3\u04F5\x05\xD2" +
		"j\x02\u04F4\u04F3\x03\x02\x02\x02\u04F4\u04F5\x03\x02\x02\x02\u04F5\u04F6" +
		"\x03\x02\x02\x02\u04F6\u04F7\x05\xCAf\x02\u04F7\xC3\x03\x02\x02\x02\u04F8" +
		"\u0514\x07J\x02\x02\u04F9\u04FE\x07K\x02\x02\u04FA\u04FB\x07J\x02\x02" +
		"\u04FB\u04FD\x07K\x02\x02\u04FC\u04FA\x03\x02\x02\x02\u04FD\u0500\x03" +
		"\x02\x02\x02\u04FE\u04FC\x03\x02\x02\x02\u04FE\u04FF\x03\x02\x02\x02\u04FF" +
		"\u0501\x03\x02\x02\x02\u0500\u04FE\x03\x02\x02\x02\u0501\u0515\x05N(\x02" +
		"\u0502\u0503\x05\xBA^\x02\u0503\u050A\x07K\x02\x02\u0504\u0505\x07J\x02" +
		"\x02\u0505\u0506\x05\xBA^\x02\u0506\u0507\x07K\x02\x02\u0507\u0509\x03" +
		"\x02\x02\x02\u0508\u0504\x03\x02\x02\x02\u0509\u050C\x03\x02\x02\x02\u050A" +
		"\u0508\x03\x02\x02\x02\u050A\u050B\x03\x02\x02\x02\u050B\u0511\x03\x02" +
		"\x02\x02\u050C\u050A\x03\x02\x02\x02\u050D\u050E\x07J\x02\x02\u050E\u0510" +
		"\x07K\x02\x02\u050F\u050D\x03\x02\x02\x02\u0510\u0513\x03\x02\x02\x02" +
		"\u0511\u050F\x03\x02\x02\x02\u0511\u0512\x03\x02\x02\x02\u0512\u0515\x03" +
		"\x02\x02\x02\u0513\u0511\x03\x02\x02\x02\u0514\u04F9\x03\x02\x02\x02\u0514" +
		"\u0502\x03\x02\x02\x02\u0515\xC5\x03\x02\x02\x02\u0516\u0532\x07H\x02" +
		"\x02\u0517\u0533\x07I\x02\x02\u0518\u051B\x07r\x02\x02\u0519\u051B\x05" +
		"\xBA^\x02\u051A\u0518\x03\x02\x02\x02\u051A\u0519\x03\x02\x02\x02\u051B" +
		"\u051C\x03\x02\x02\x02\u051C\u051F\x07q\x02\x02\u051D\u0520\x05l7\x02" +
		"\u051E\u0520\x05\xBA^\x02\u051F\u051D\x03\x02\x02\x02\u051F\u051E\x03" +
		"\x02\x02\x02\u0520\u052D\x03\x02\x02\x02\u0521\u0524\x07M\x02\x02\u0522" +
		"\u0525\x07r\x02\x02\u0523\u0525\x05\xBA^\x02\u0524\u0522\x03\x02\x02\x02" +
		"\u0524\u0523\x03\x02\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526\u0529\x07" +
		"q\x02\x02\u0527\u052A\x05l7\x02\u0528\u052A\x05\xBA^\x02\u0529\u0527\x03" +
		"\x02\x02\x02\u0529\u0528\x03\x02\x02\x02\u052A\u052C\x03\x02\x02\x02\u052B" +
		"\u0521\x03\x02\x02\x02\u052C\u052F\x03\x02\x02\x02\u052D\u052B\x03\x02" +
		"\x02\x02\u052D\u052E\x03\x02\x02\x02\u052E\u0530\x03\x02\x02\x02\u052F" +
		"\u052D\x03\x02\x02\x02\u0530\u0531\x07I\x02\x02\u0531\u0533\x03\x02\x02" +
		"\x02\u0532\u0517\x03\x02\x02\x02\u0532\u051A\x03\x02\x02\x02\u0533\xC7" +
		"\x03\x02\x02\x02\u0534\u0546\x07H\x02\x02\u0535\u0547\x07I\x02\x02\u0536" +
		"\u0539\x05l7\x02\u0537\u0539\x05\xBA^\x02\u0538\u0536\x03\x02\x02\x02" +
		"\u0538\u0537\x03\x02\x02\x02\u0539\u0541\x03\x02\x02\x02\u053A\u053D\x07" +
		"M\x02\x02\u053B\u053E\x05l7\x02\u053C\u053E\x05\xBA^\x02\u053D\u053B\x03" +
		"\x02\x02\x02\u053D\u053C\x03\x02\x02\x02\u053E\u0540\x03\x02\x02\x02\u053F" +
		"\u053A\x03\x02\x02\x02\u0540\u0543\x03\x02\x02\x02\u0541\u053F\x03\x02" +
		"\x02\x02\u0541\u0542\x03\x02\x02\x02\u0542\u0544\x03\x02\x02\x02\u0543" +
		"\u0541\x03\x02\x02\x02\u0544\u0545\x07I\x02\x02\u0545\u0547\x03\x02\x02" +
		"\x02\u0546\u0535\x03\x02\x02\x02\u0546\u0538\x03\x02\x02\x02\u0547\xC9" +
		"\x03\x02\x02\x02\u0548\u054A\x05\xD8m\x02\u0549\u054B\x05$\x13\x02\u054A" +
		"\u0549\x03\x02\x02\x02\u054A\u054B\x03\x02\x02\x02\u054B\xCB\x03\x02\x02" +
		"\x02\u054C\u054D\x05\xCEh\x02\u054D\u054E\x05\xD6l\x02\u054E\xCD\x03\x02" +
		"\x02\x02\u054F\u0550\x07Q\x02\x02\u0550\u0551\x05\"\x12\x02\u0551\u0552" +
		"\x07P\x02\x02\u0552\xCF\x03\x02\x02\x02\u0553\u0554\x07Q\x02\x02\u0554" +
		"\u0557\x07P\x02\x02\u0555\u0557\x05X-\x02\u0556\u0553\x03\x02\x02\x02" +
		"\u0556\u0555\x03\x02\x02\x02\u0557\xD1\x03\x02\x02\x02\u0558\u0559\x07" +
		"Q\x02\x02\u0559\u055C\x07P\x02\x02\u055A\u055C\x05\xCEh\x02\u055B\u0558" +
		"\x03\x02\x02\x02\u055B\u055A\x03\x02\x02\x02\u055C\xD3\x03\x02\x02\x02" +
		"\u055D\u0564\x05\xD8m\x02\u055E\u055F\x07N\x02\x02\u055F\u0561\x07r\x02" +
		"\x02\u0560\u0562\x05\xD8m\x02\u0561\u0560\x03\x02\x02\x02\u0561\u0562" +
		"\x03\x02\x02\x02\u0562\u0564\x03\x02\x02\x02\u0563\u055D\x03\x02\x02\x02" +
		"\u0563\u055E\x03\x02\x02\x02\u0564\xD5\x03\x02\x02\x02\u0565\u0566\x07" +
		"*\x02\x02\u0566\u056A\x05\xD4k\x02\u0567\u0568\x07r\x02\x02\u0568\u056A" +
		"\x05\xD8m\x02\u0569\u0565\x03\x02\x02\x02\u0569\u0567\x03\x02\x02\x02" +
		"\u056A\xD7\x03\x02\x02\x02\u056B\u056D\x07F\x02\x02\u056C\u056E\x05\xB0" +
		"Y\x02\u056D\u056C\x03\x02\x02\x02\u056D\u056E\x03\x02\x02\x02\u056E\u056F" +
		"\x03\x02\x02\x02\u056F\u0570\x07G\x02\x02\u0570\xD9\x03\x02\x02\x02\xA7" +
		"\xDB\xE0\xE6\xEE\xF7\xFC\u0103\u010A\u0111\u0118\u011D\u0123\u0133\u0137" +
		"\u013C\u0140\u0144\u014E\u0156\u015D\u0164\u0168\u016B\u016E\u0177\u017D" +
		"\u0182\u0185\u018B\u0191\u0195\u019E\u01A5\u01AE\u01B5\u01BB\u01BF\u01CB" +
		"\u01CE\u01D2\u01DA\u01DF\u01E3\u01EC\u01FE\u0205\u020A\u0213\u021B\u0225" +
		"\u022D\u0235\u023A\u0246\u024C\u0253\u0258\u0260\u0264\u0266\u0271\u0279" +
		"\u027C\u0280\u0285\u0289\u028E\u0298\u02A1\u02A3\u02AA\u02AF\u02B8\u02BD" +
		"\u02C0\u02C5\u02CE\u02DE\u02E8\u02EB\u02F1\u02F6\u0300\u0308\u030B\u030E" +
		"\u031B\u0323\u0328\u0330\u0334\u0338\u033C\u033E\u0342\u0348\u0353\u035B" +
		"\u0363\u036F\u038C\u038F\u0392\u039A\u039E\u03A2\u03AB\u03B0\u03BD\u03C2" +
		"\u03C7\u03CC\u03D1\u03D8\u03E5\u03EE\u03F7\u03FD\u0407\u040B\u040F\u0411" +
		"\u0415\u041A\u042D\u0439\u043F\u044E\u045E\u0484\u048C\u0491\u04AD\u04B5" +
		"\u04B7\u04CD\u04D0\u04DB\u04DD\u04E1\u04E6\u04EA\u04F0\u04F4\u04FE\u050A" +
		"\u0511\u0514\u051A\u051F\u0524\u0529\u052D\u0532\u0538\u053D\u0541\u0546" +
		"\u054A\u0556\u055B\u0561\u0563\u0569\u056D";
	public static readonly _serializedATN: string = Utils.join(
		[
			apexParser._serializedATNSegment0,
			apexParser._serializedATNSegment1,
			apexParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!apexParser.__ATN) {
			apexParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(apexParser._serializedATN));
		}

		return apexParser.__ATN;
	}

}

export class CompilationUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(apexParser.EOF, 0); }
	public packageDeclaration(): PackageDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PackageDeclarationContext);
	}
	public importDeclaration(): ImportDeclarationContext[];
	public importDeclaration(i: number): ImportDeclarationContext;
	public importDeclaration(i?: number): ImportDeclarationContext | ImportDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportDeclarationContext);
		} else {
			return this.getRuleContext(i, ImportDeclarationContext);
		}
	}
	public typeDeclaration(): TypeDeclarationContext[];
	public typeDeclaration(i: number): TypeDeclarationContext;
	public typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_compilationUnit; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageDeclarationContext extends ParserRuleContext {
	public PACKAGE(): TerminalNode { return this.getToken(apexParser.PACKAGE, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(apexParser.SEMI, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_packageDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitPackageDeclaration) {
			return visitor.visitPackageDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDeclarationContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(apexParser.IMPORT, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public SEMI(): TerminalNode { return this.getToken(apexParser.SEMI, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(apexParser.STATIC, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(apexParser.DOT, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(apexParser.MUL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_importDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitImportDeclaration) {
			return visitor.visitImportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
	public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext;
	public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext | ClassOrInterfaceModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassOrInterfaceModifierContext);
		} else {
			return this.getRuleContext(i, ClassOrInterfaceModifierContext);
		}
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(apexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_typeDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	public classOrInterfaceModifier(): ClassOrInterfaceModifierContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceModifierContext);
	}
	public NATIVE(): TerminalNode | undefined { return this.tryGetToken(apexParser.NATIVE, 0); }
	public SYNCHRONIZED(): TerminalNode | undefined { return this.tryGetToken(apexParser.SYNCHRONIZED, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(apexParser.TRANSIENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_modifier; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(apexParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(apexParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(apexParser.PRIVATE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(apexParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(apexParser.ABSTRACT, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(apexParser.FINAL, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(apexParser.GLOBAL, 0); }
	public WEBSERVICE(): TerminalNode | undefined { return this.tryGetToken(apexParser.WEBSERVICE, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(apexParser.OVERRIDE, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(apexParser.VIRTUAL, 0); }
	public TESTMETHOD(): TerminalNode | undefined { return this.tryGetToken(apexParser.TESTMETHOD, 0); }
	public APEX_WITH_SHARING(): TerminalNode | undefined { return this.tryGetToken(apexParser.APEX_WITH_SHARING, 0); }
	public APEX_WITHOUT_SHARING(): TerminalNode | undefined { return this.tryGetToken(apexParser.APEX_WITHOUT_SHARING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_classOrInterfaceModifier; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceModifier) {
			return visitor.visitClassOrInterfaceModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableModifierContext extends ParserRuleContext {
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(apexParser.FINAL, 0); }
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_variableModifier; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitVariableModifier) {
			return visitor.visitVariableModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(apexParser.CLASS, 0); }
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(apexParser.EXTENDS, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(apexParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_classDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(apexParser.LT, 0); }
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(apexParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_typeParameters; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(apexParser.EXTENDS, 0); }
	public typeBound(): TypeBoundContext | undefined {
		return this.tryGetRuleContext(0, TypeBoundContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_typeParameter; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBoundContext extends ParserRuleContext {
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public BITAND(): TerminalNode[];
	public BITAND(i: number): TerminalNode;
	public BITAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.BITAND);
		} else {
			return this.getToken(apexParser.BITAND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_typeBound; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitTypeBound) {
			return visitor.visitTypeBound(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(apexParser.ENUM, 0); }
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public LBRACE(): TerminalNode { return this.getToken(apexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(apexParser.RBRACE, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(apexParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(apexParser.COMMA, 0); }
	public enumBodyDeclarations(): EnumBodyDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, EnumBodyDeclarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_enumDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantsContext extends ParserRuleContext {
	public enumConstant(): EnumConstantContext[];
	public enumConstant(i: number): EnumConstantContext;
	public enumConstant(i?: number): EnumConstantContext | EnumConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumConstantContext);
		} else {
			return this.getRuleContext(i, EnumConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_enumConstants; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitEnumConstants) {
			return visitor.visitEnumConstants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_enumConstant; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitEnumConstant) {
			return visitor.visitEnumConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumBodyDeclarationsContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(apexParser.SEMI, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_enumBodyDeclarations; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitEnumBodyDeclarations) {
			return visitor.visitEnumBodyDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(apexParser.INTERFACE, 0); }
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(apexParser.EXTENDS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_interfaceDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_typeList; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(apexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(apexParser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_classBody; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(apexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(apexParser.RBRACE, 0); }
	public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
	public interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext;
	public interfaceBodyDeclaration(i?: number): InterfaceBodyDeclarationContext | InterfaceBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_interfaceBody; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(apexParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(apexParser.STATIC, 0); }
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_classBodyDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public genericMethodDeclaration(): GenericMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericMethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public genericConstructorDeclaration(): GenericConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericConstructorDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public propertyDeclaration(): PropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PropertyDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_memberDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(apexParser.VOID, 0); }
	public methodBody(): MethodBodyContext | undefined {
		return this.tryGetRuleContext(0, MethodBodyContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(apexParser.SEMI, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(apexParser.OVERRIDE, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.LBRACK);
		} else {
			return this.getToken(apexParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.RBRACK);
		} else {
			return this.getToken(apexParser.RBRACK, i);
		}
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(apexParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_methodDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getRuleContext(0, MethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_genericMethodDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitGenericMethodDeclaration) {
			return visitor.visitGenericMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public constructorBody(): ConstructorBodyContext {
		return this.getRuleContext(0, ConstructorBodyContext);
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(apexParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_constructorDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericConstructorDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext {
		return this.getRuleContext(0, ConstructorDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_genericConstructorDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitGenericConstructorDeclaration) {
			return visitor.visitGenericConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public SEMI(): TerminalNode { return this.getToken(apexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_fieldDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyDeclarationContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public propertyBodyDeclaration(): PropertyBodyDeclarationContext {
		return this.getRuleContext(0, PropertyBodyDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_propertyDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitPropertyDeclaration) {
			return visitor.visitPropertyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyBodyDeclarationContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(apexParser.LBRACE, 0); }
	public propertyBlock(): PropertyBlockContext[];
	public propertyBlock(i: number): PropertyBlockContext;
	public propertyBlock(i?: number): PropertyBlockContext | PropertyBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyBlockContext);
		} else {
			return this.getRuleContext(i, PropertyBlockContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(apexParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_propertyBodyDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitPropertyBodyDeclaration) {
			return visitor.visitPropertyBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyDeclarationContext extends ParserRuleContext {
	public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(apexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_interfaceBodyDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitInterfaceBodyDeclaration) {
			return visitor.visitInterfaceBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMemberDeclarationContext extends ParserRuleContext {
	public constDeclaration(): ConstDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstDeclarationContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceMethodDeclarationContext);
	}
	public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GenericInterfaceMethodDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_interfaceMemberDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitInterfaceMemberDeclaration) {
			return visitor.visitInterfaceMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDeclarationContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public constantDeclarator(): ConstantDeclaratorContext[];
	public constantDeclarator(i: number): ConstantDeclaratorContext;
	public constantDeclarator(i?: number): ConstantDeclaratorContext | ConstantDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantDeclaratorContext);
		} else {
			return this.getRuleContext(i, ConstantDeclaratorContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(apexParser.SEMI, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_constDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitConstDeclaration) {
			return visitor.visitConstDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDeclaratorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(apexParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext {
		return this.getRuleContext(0, VariableInitializerContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.LBRACK);
		} else {
			return this.getToken(apexParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.RBRACK);
		} else {
			return this.getToken(apexParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_constantDeclarator; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitConstantDeclarator) {
			return visitor.visitConstantDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public SEMI(): TerminalNode { return this.getToken(apexParser.SEMI, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(apexParser.VOID, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.LBRACK);
		} else {
			return this.getToken(apexParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.RBRACK);
		} else {
			return this.getToken(apexParser.RBRACK, i);
		}
	}
	public THROWS(): TerminalNode | undefined { return this.tryGetToken(apexParser.THROWS, 0); }
	public qualifiedNameList(): QualifiedNameListContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_interfaceMethodDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericInterfaceMethodDeclarationContext extends ParserRuleContext {
	public typeParameters(): TypeParametersContext {
		return this.getRuleContext(0, TypeParametersContext);
	}
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		return this.getRuleContext(0, InterfaceMethodDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_genericInterfaceMethodDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitGenericInterfaceMethodDeclaration) {
			return visitor.visitGenericInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_variableDeclarators; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitVariableDeclarators) {
			return visitor.visitVariableDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(apexParser.ASSIGN, 0); }
	public variableInitializer(): VariableInitializerContext | undefined {
		return this.tryGetRuleContext(0, VariableInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_variableDeclarator; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.LBRACK);
		} else {
			return this.getToken(apexParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.RBRACK);
		} else {
			return this.getToken(apexParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_variableDeclaratorId; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitVariableDeclaratorId) {
			return visitor.visitVariableDeclaratorId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableInitializerContext extends ParserRuleContext {
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_variableInitializer; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitVariableInitializer) {
			return visitor.visitVariableInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(apexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(apexParser.RBRACE, 0); }
	public variableInitializer(): VariableInitializerContext[];
	public variableInitializer(i: number): VariableInitializerContext;
	public variableInitializer(i?: number): VariableInitializerContext | VariableInitializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableInitializerContext);
		} else {
			return this.getRuleContext(i, VariableInitializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_arrayInitializer; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_enumConstantName; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitEnumConstantName) {
			return visitor.visitEnumConstantName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.LBRACK);
		} else {
			return this.getToken(apexParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.RBRACK);
		} else {
			return this.getToken(apexParser.RBRACK, i);
		}
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_type_; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassOrInterfaceTypeContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.Identifier);
		} else {
			return this.getToken(apexParser.Identifier, i);
		}
	}
	public typeArguments(): TypeArgumentsContext[];
	public typeArguments(i: number): TypeArgumentsContext;
	public typeArguments(i?: number): TypeArgumentsContext | TypeArgumentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.DOT);
		} else {
			return this.getToken(apexParser.DOT, i);
		}
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(apexParser.SET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_classOrInterfaceType; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitClassOrInterfaceType) {
			return visitor.visitClassOrInterfaceType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(apexParser.CHAR, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(apexParser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(apexParser.SHORT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(apexParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(apexParser.FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_primitiveType; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(apexParser.LT, 0); }
	public typeArgument(): TypeArgumentContext[];
	public typeArgument(i: number): TypeArgumentContext;
	public typeArgument(i?: number): TypeArgumentContext | TypeArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentContext);
		} else {
			return this.getRuleContext(i, TypeArgumentContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(apexParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_typeArguments; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentContext extends ParserRuleContext {
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(apexParser.QUESTION, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(apexParser.EXTENDS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(apexParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_typeArgument; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitTypeArgument) {
			return visitor.visitTypeArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameListContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_qualifiedNameList; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitQualifiedNameList) {
			return visitor.visitQualifiedNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(apexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(apexParser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_formalParameters; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	public lastFormalParameter(): LastFormalParameterContext | undefined {
		return this.tryGetRuleContext(0, LastFormalParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_formalParameterList; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_formalParameter; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastFormalParameterContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public ELLIPSIS(): TerminalNode { return this.getToken(apexParser.ELLIPSIS, 0); }
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_lastFormalParameter; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitLastFormalParameter) {
			return visitor.visitLastFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodBodyContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_methodBody; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitMethodBody) {
			return visitor.visitMethodBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorBodyContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_constructorBody; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitConstructorBody) {
			return visitor.visitConstructorBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.Identifier);
		} else {
			return this.getToken(apexParser.Identifier, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.DOT);
		} else {
			return this.getToken(apexParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_qualifiedName; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(apexParser.IntegerLiteral, 0); }
	public FloatingPointLiteral(): TerminalNode | undefined { return this.tryGetToken(apexParser.FloatingPointLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(apexParser.CharacterLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(apexParser.StringLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(apexParser.BooleanLiteral, 0); }
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(apexParser.NullLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_literal; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(apexParser.AT, 0); }
	public annotationName(): AnnotationNameContext {
		return this.getRuleContext(0, AnnotationNameContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(apexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(apexParser.RPAREN, 0); }
	public elementValuePairs(): ElementValuePairsContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairsContext);
	}
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_annotation; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationNameContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_annotationName; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitAnnotationName) {
			return visitor.visitAnnotationName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairsContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_elementValuePairs; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitElementValuePairs) {
			return visitor.visitElementValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(apexParser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_elementValuePair; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_elementValue; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(apexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(apexParser.RBRACE, 0); }
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_elementValueArrayInitializer; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeDeclarationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(apexParser.AT, 0); }
	public INTERFACE(): TerminalNode { return this.getToken(apexParser.INTERFACE, 0); }
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public annotationTypeBody(): AnnotationTypeBodyContext {
		return this.getRuleContext(0, AnnotationTypeBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_annotationTypeDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeDeclaration) {
			return visitor.visitAnnotationTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(apexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(apexParser.RBRACE, 0); }
	public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
	public annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext;
	public annotationTypeElementDeclaration(i?: number): AnnotationTypeElementDeclarationContext | AnnotationTypeElementDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_annotationTypeBody; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeBody) {
			return visitor.visitAnnotationTypeBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementDeclarationContext extends ParserRuleContext {
	public annotationTypeElementRest(): AnnotationTypeElementRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeElementRestContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(apexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_annotationTypeElementDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementDeclaration) {
			return visitor.visitAnnotationTypeElementDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationTypeElementRestContext extends ParserRuleContext {
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodOrConstantRestContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(apexParser.SEMI, 0); }
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationTypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_annotationTypeElementRest; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitAnnotationTypeElementRest) {
			return visitor.visitAnnotationTypeElementRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMethodOrConstantRestContext extends ParserRuleContext {
	public annotationMethodRest(): AnnotationMethodRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationMethodRestContext);
	}
	public annotationConstantRest(): AnnotationConstantRestContext | undefined {
		return this.tryGetRuleContext(0, AnnotationConstantRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_annotationMethodOrConstantRest; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodOrConstantRest) {
			return visitor.visitAnnotationMethodOrConstantRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationMethodRestContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(apexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(apexParser.RPAREN, 0); }
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_annotationMethodRest; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitAnnotationMethodRest) {
			return visitor.visitAnnotationMethodRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationConstantRestContext extends ParserRuleContext {
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_annotationConstantRest; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitAnnotationConstantRest) {
			return visitor.visitAnnotationConstantRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(apexParser.DEFAULT, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_defaultValue; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitDefaultValue) {
			return visitor.visitDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(apexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(apexParser.RBRACE, 0); }
	public blockStatement(): BlockStatementContext[];
	public blockStatement(i: number): BlockStatementContext;
	public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStatementContext);
		} else {
			return this.getRuleContext(i, BlockStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_block; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStatementContext extends ParserRuleContext {
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationStatementContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public typeDeclaration(): TypeDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_blockStatement; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitBlockStatement) {
			return visitor.visitBlockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	public SEMI(): TerminalNode { return this.getToken(apexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_localVariableDeclarationStatement; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStatement) {
			return visitor.visitLocalVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_localVariableDeclaration; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public IF(): TerminalNode | undefined { return this.tryGetToken(apexParser.IF, 0); }
	public parExpression(): ParExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(apexParser.ELSE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(apexParser.FOR, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(apexParser.LPAREN, 0); }
	public forControl(): ForControlContext | undefined {
		return this.tryGetRuleContext(0, ForControlContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(apexParser.RPAREN, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(apexParser.WHILE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(apexParser.DO, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(apexParser.SEMI, 0); }
	public RUNAS(): TerminalNode | undefined { return this.tryGetToken(apexParser.RUNAS, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public TRY(): TerminalNode | undefined { return this.tryGetToken(apexParser.TRY, 0); }
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	public resourceSpecification(): ResourceSpecificationContext | undefined {
		return this.tryGetRuleContext(0, ResourceSpecificationContext);
	}
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(apexParser.RETURN, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(apexParser.THROW, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(apexParser.BREAK, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(apexParser.Identifier, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(apexParser.CONTINUE, 0); }
	public statementExpression(): StatementExpressionContext | undefined {
		return this.tryGetRuleContext(0, StatementExpressionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(apexParser.COLON, 0); }
	public apexDbExpression(): ApexDbExpressionContext | undefined {
		return this.tryGetRuleContext(0, ApexDbExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_statement; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyBlockContext extends ParserRuleContext {
	public getter(): GetterContext | undefined {
		return this.tryGetRuleContext(0, GetterContext);
	}
	public setter(): SetterContext | undefined {
		return this.tryGetRuleContext(0, SetterContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_propertyBlock; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitPropertyBlock) {
			return visitor.visitPropertyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetterContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(apexParser.GET, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(apexParser.SEMI, 0); }
	public methodBody(): MethodBodyContext | undefined {
		return this.tryGetRuleContext(0, MethodBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_getter; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitGetter) {
			return visitor.visitGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetterContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(apexParser.SET, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(apexParser.SEMI, 0); }
	public methodBody(): MethodBodyContext | undefined {
		return this.tryGetRuleContext(0, MethodBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_setter; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitSetter) {
			return visitor.visitSetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(apexParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(apexParser.LPAREN, 0); }
	public catchType(): CatchTypeContext {
		return this.getRuleContext(0, CatchTypeContext);
	}
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public RPAREN(): TerminalNode { return this.getToken(apexParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_catchClause; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchTypeContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext[];
	public qualifiedName(i: number): QualifiedNameContext;
	public qualifiedName(i?: number): QualifiedNameContext | QualifiedNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QualifiedNameContext);
		} else {
			return this.getRuleContext(i, QualifiedNameContext);
		}
	}
	public BITOR(): TerminalNode[];
	public BITOR(i: number): TerminalNode;
	public BITOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.BITOR);
		} else {
			return this.getToken(apexParser.BITOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_catchType; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitCatchType) {
			return visitor.visitCatchType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(apexParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_finallyBlock; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceSpecificationContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(apexParser.LPAREN, 0); }
	public resources(): ResourcesContext {
		return this.getRuleContext(0, ResourcesContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(apexParser.RPAREN, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(apexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_resourceSpecification; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitResourceSpecification) {
			return visitor.visitResourceSpecification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourcesContext extends ParserRuleContext {
	public resource(): ResourceContext[];
	public resource(i: number): ResourceContext;
	public resource(i?: number): ResourceContext | ResourceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ResourceContext);
		} else {
			return this.getRuleContext(i, ResourceContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.SEMI);
		} else {
			return this.getToken(apexParser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_resources; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitResources) {
			return visitor.visitResources(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResourceContext extends ParserRuleContext {
	public classOrInterfaceType(): ClassOrInterfaceTypeContext {
		return this.getRuleContext(0, ClassOrInterfaceTypeContext);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(apexParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_resource; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitResource) {
			return visitor.visitResource(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.SEMI);
		} else {
			return this.getToken(apexParser.SEMI, i);
		}
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_forControl; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitForControl) {
			return visitor.visitForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_forInit; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public variableDeclaratorId(): VariableDeclaratorIdContext {
		return this.getRuleContext(0, VariableDeclaratorIdContext);
	}
	public COLON(): TerminalNode { return this.getToken(apexParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public variableModifier(): VariableModifierContext[];
	public variableModifier(i: number): VariableModifierContext;
	public variableModifier(i?: number): VariableModifierContext | VariableModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableModifierContext);
		} else {
			return this.getRuleContext(i, VariableModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_enhancedForControl; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitEnhancedForControl) {
			return visitor.visitEnhancedForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_forUpdate; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(apexParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(apexParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_parExpression; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_expressionList; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_statementExpression; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitStatementExpression) {
			return visitor.visitStatementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_constantExpression; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitConstantExpression) {
			return visitor.visitConstantExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApexDbUpsertExpressionContext extends ParserRuleContext {
	public DB_UPSERT(): TerminalNode { return this.getToken(apexParser.DB_UPSERT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_apexDbUpsertExpression; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitApexDbUpsertExpression) {
			return visitor.visitApexDbUpsertExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ApexDbExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public DB_INSERT(): TerminalNode | undefined { return this.tryGetToken(apexParser.DB_INSERT, 0); }
	public DB_UPDATE(): TerminalNode | undefined { return this.tryGetToken(apexParser.DB_UPDATE, 0); }
	public DB_DELETE(): TerminalNode | undefined { return this.tryGetToken(apexParser.DB_DELETE, 0); }
	public DB_UNDELETE(): TerminalNode | undefined { return this.tryGetToken(apexParser.DB_UNDELETE, 0); }
	public apexDbUpsertExpression(): ApexDbUpsertExpressionContext | undefined {
		return this.tryGetRuleContext(0, ApexDbUpsertExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_apexDbExpression; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitApexDbExpression) {
			return visitor.visitApexDbExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(apexParser.DOT, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(apexParser.GET, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(apexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(apexParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(apexParser.SET, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(apexParser.Identifier, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(apexParser.QUESTION, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(apexParser.THIS, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(apexParser.NEW, 0); }
	public DB_INSERT(): TerminalNode | undefined { return this.tryGetToken(apexParser.DB_INSERT, 0); }
	public DB_UPSERT(): TerminalNode | undefined { return this.tryGetToken(apexParser.DB_UPSERT, 0); }
	public DB_UPDATE(): TerminalNode | undefined { return this.tryGetToken(apexParser.DB_UPDATE, 0); }
	public DB_DELETE(): TerminalNode | undefined { return this.tryGetToken(apexParser.DB_DELETE, 0); }
	public DB_UNDELETE(): TerminalNode | undefined { return this.tryGetToken(apexParser.DB_UNDELETE, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(apexParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public explicitGenericInvocation(): ExplicitGenericInvocationContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationContext);
	}
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(apexParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(apexParser.RBRACK, 0); }
	public creator(): CreatorContext | undefined {
		return this.tryGetRuleContext(0, CreatorContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(apexParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(apexParser.DEC, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(apexParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(apexParser.SUB, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(apexParser.TILDE, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(apexParser.BANG, 0); }
	public MUL(): TerminalNode | undefined { return this.tryGetToken(apexParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(apexParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(apexParser.MOD, 0); }
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.LT);
		} else {
			return this.getToken(apexParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.GT);
		} else {
			return this.getToken(apexParser.GT, i);
		}
	}
	public LE(): TerminalNode | undefined { return this.tryGetToken(apexParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(apexParser.GE, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(apexParser.INSTANCEOF, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(apexParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(apexParser.NOTEQUAL, 0); }
	public BITAND(): TerminalNode | undefined { return this.tryGetToken(apexParser.BITAND, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(apexParser.CARET, 0); }
	public BITOR(): TerminalNode | undefined { return this.tryGetToken(apexParser.BITOR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(apexParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(apexParser.OR, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(apexParser.COLON, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(apexParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(apexParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(apexParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(apexParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(apexParser.DIV_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(apexParser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(apexParser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(apexParser.XOR_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(apexParser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(apexParser.URSHIFT_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(apexParser.LSHIFT_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(apexParser.MOD_ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_expression; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(apexParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(apexParser.RPAREN, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(apexParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(apexParser.SUPER, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(apexParser.Identifier, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(apexParser.DOT, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(apexParser.CLASS, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(apexParser.VOID, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | undefined {
		return this.tryGetRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public SoqlLiteral(): TerminalNode | undefined { return this.tryGetToken(apexParser.SoqlLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_primary; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatorContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public classCreatorRest(): ClassCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ClassCreatorRestContext);
	}
	public arrayCreatorRest(): ArrayCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorRestContext);
	}
	public mapCreatorRest(): MapCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, MapCreatorRestContext);
	}
	public setCreatorRest(): SetCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, SetCreatorRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_creator; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitCreator) {
			return visitor.visitCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.Identifier);
		} else {
			return this.getToken(apexParser.Identifier, i);
		}
	}
	public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext[];
	public typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext;
	public typeArgumentsOrDiamond(i?: number): TypeArgumentsOrDiamondContext | TypeArgumentsOrDiamondContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeArgumentsOrDiamondContext);
		} else {
			return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.DOT);
		} else {
			return this.getToken(apexParser.DOT, i);
		}
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(apexParser.SET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_createdName; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitCreatedName) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InnerCreatorContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(apexParser.Identifier, 0); }
	public classCreatorRest(): ClassCreatorRestContext {
		return this.getRuleContext(0, ClassCreatorRestContext);
	}
	public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_innerCreator; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitInnerCreator) {
			return visitor.visitInnerCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreatorRestContext extends ParserRuleContext {
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.LBRACK);
		} else {
			return this.getToken(apexParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.RBRACK);
		} else {
			return this.getToken(apexParser.RBRACK, i);
		}
	}
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_arrayCreatorRest; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitArrayCreatorRest) {
			return visitor.visitArrayCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapCreatorRestContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(apexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(apexParser.RBRACE, 0); }
	public LAMBDA_LIKE(): TerminalNode[];
	public LAMBDA_LIKE(i: number): TerminalNode;
	public LAMBDA_LIKE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.LAMBDA_LIKE);
		} else {
			return this.getToken(apexParser.LAMBDA_LIKE, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.Identifier);
		} else {
			return this.getToken(apexParser.Identifier, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_mapCreatorRest; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitMapCreatorRest) {
			return visitor.visitMapCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetCreatorRestContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(apexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(apexParser.RBRACE, 0); }
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(apexParser.COMMA);
		} else {
			return this.getToken(apexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_setCreatorRest; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitSetCreatorRest) {
			return visitor.visitSetCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassCreatorRestContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public classBody(): ClassBodyContext | undefined {
		return this.tryGetRuleContext(0, ClassBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_classCreatorRest; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitClassCreatorRest) {
			return visitor.visitClassCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitGenericInvocationContext extends ParserRuleContext {
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
		return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
		return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_explicitGenericInvocation; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitExplicitGenericInvocation) {
			return visitor.visitExplicitGenericInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonWildcardTypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(apexParser.LT, 0); }
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode { return this.getToken(apexParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_nonWildcardTypeArguments; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArguments) {
			return visitor.visitNonWildcardTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(apexParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(apexParser.GT, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_typeArgumentsOrDiamond; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitTypeArgumentsOrDiamond) {
			return visitor.visitTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonWildcardTypeArgumentsOrDiamondContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(apexParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(apexParser.GT, 0); }
	public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, NonWildcardTypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_nonWildcardTypeArgumentsOrDiamond; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitNonWildcardTypeArgumentsOrDiamond) {
			return visitor.visitNonWildcardTypeArgumentsOrDiamond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuperSuffixContext extends ParserRuleContext {
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(apexParser.DOT, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(apexParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_superSuffix; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitSuperSuffix) {
			return visitor.visitSuperSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitGenericInvocationSuffixContext extends ParserRuleContext {
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(apexParser.SUPER, 0); }
	public superSuffix(): SuperSuffixContext | undefined {
		return this.tryGetRuleContext(0, SuperSuffixContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(apexParser.Identifier, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_explicitGenericInvocationSuffix; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitExplicitGenericInvocationSuffix) {
			return visitor.visitExplicitGenericInvocationSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(apexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(apexParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return apexParser.RULE_arguments; }
	// @Override
	public accept<Result>(visitor: apexVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


