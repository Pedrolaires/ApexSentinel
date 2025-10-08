// Generated from src/grammar/apex.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CompilationUnitContext } from "./apexParser";
import { PackageDeclarationContext } from "./apexParser";
import { ImportDeclarationContext } from "./apexParser";
import { TypeDeclarationContext } from "./apexParser";
import { ModifierContext } from "./apexParser";
import { ClassOrInterfaceModifierContext } from "./apexParser";
import { VariableModifierContext } from "./apexParser";
import { ClassDeclarationContext } from "./apexParser";
import { TypeParametersContext } from "./apexParser";
import { TypeParameterContext } from "./apexParser";
import { TypeBoundContext } from "./apexParser";
import { EnumDeclarationContext } from "./apexParser";
import { EnumConstantsContext } from "./apexParser";
import { EnumConstantContext } from "./apexParser";
import { EnumBodyDeclarationsContext } from "./apexParser";
import { InterfaceDeclarationContext } from "./apexParser";
import { TypeListContext } from "./apexParser";
import { ClassBodyContext } from "./apexParser";
import { InterfaceBodyContext } from "./apexParser";
import { ClassBodyDeclarationContext } from "./apexParser";
import { MemberDeclarationContext } from "./apexParser";
import { MethodDeclarationContext } from "./apexParser";
import { GenericMethodDeclarationContext } from "./apexParser";
import { ConstructorDeclarationContext } from "./apexParser";
import { GenericConstructorDeclarationContext } from "./apexParser";
import { FieldDeclarationContext } from "./apexParser";
import { PropertyDeclarationContext } from "./apexParser";
import { PropertyBodyDeclarationContext } from "./apexParser";
import { InterfaceBodyDeclarationContext } from "./apexParser";
import { InterfaceMemberDeclarationContext } from "./apexParser";
import { ConstDeclarationContext } from "./apexParser";
import { ConstantDeclaratorContext } from "./apexParser";
import { InterfaceMethodDeclarationContext } from "./apexParser";
import { GenericInterfaceMethodDeclarationContext } from "./apexParser";
import { VariableDeclaratorsContext } from "./apexParser";
import { VariableDeclaratorContext } from "./apexParser";
import { VariableDeclaratorIdContext } from "./apexParser";
import { VariableInitializerContext } from "./apexParser";
import { ArrayInitializerContext } from "./apexParser";
import { EnumConstantNameContext } from "./apexParser";
import { Type_Context } from "./apexParser";
import { ClassOrInterfaceTypeContext } from "./apexParser";
import { PrimitiveTypeContext } from "./apexParser";
import { TypeArgumentsContext } from "./apexParser";
import { TypeArgumentContext } from "./apexParser";
import { QualifiedNameListContext } from "./apexParser";
import { FormalParametersContext } from "./apexParser";
import { FormalParameterListContext } from "./apexParser";
import { FormalParameterContext } from "./apexParser";
import { LastFormalParameterContext } from "./apexParser";
import { MethodBodyContext } from "./apexParser";
import { ConstructorBodyContext } from "./apexParser";
import { QualifiedNameContext } from "./apexParser";
import { LiteralContext } from "./apexParser";
import { AnnotationContext } from "./apexParser";
import { AnnotationNameContext } from "./apexParser";
import { ElementValuePairsContext } from "./apexParser";
import { ElementValuePairContext } from "./apexParser";
import { ElementValueContext } from "./apexParser";
import { ElementValueArrayInitializerContext } from "./apexParser";
import { AnnotationTypeDeclarationContext } from "./apexParser";
import { AnnotationTypeBodyContext } from "./apexParser";
import { AnnotationTypeElementDeclarationContext } from "./apexParser";
import { AnnotationTypeElementRestContext } from "./apexParser";
import { AnnotationMethodOrConstantRestContext } from "./apexParser";
import { AnnotationMethodRestContext } from "./apexParser";
import { AnnotationConstantRestContext } from "./apexParser";
import { DefaultValueContext } from "./apexParser";
import { BlockContext } from "./apexParser";
import { BlockStatementContext } from "./apexParser";
import { LocalVariableDeclarationStatementContext } from "./apexParser";
import { LocalVariableDeclarationContext } from "./apexParser";
import { StatementContext } from "./apexParser";
import { PropertyBlockContext } from "./apexParser";
import { GetterContext } from "./apexParser";
import { SetterContext } from "./apexParser";
import { CatchClauseContext } from "./apexParser";
import { CatchTypeContext } from "./apexParser";
import { FinallyBlockContext } from "./apexParser";
import { ResourceSpecificationContext } from "./apexParser";
import { ResourcesContext } from "./apexParser";
import { ResourceContext } from "./apexParser";
import { ForControlContext } from "./apexParser";
import { ForInitContext } from "./apexParser";
import { EnhancedForControlContext } from "./apexParser";
import { ForUpdateContext } from "./apexParser";
import { ParExpressionContext } from "./apexParser";
import { ExpressionListContext } from "./apexParser";
import { StatementExpressionContext } from "./apexParser";
import { ConstantExpressionContext } from "./apexParser";
import { ApexDbUpsertExpressionContext } from "./apexParser";
import { ApexDbExpressionContext } from "./apexParser";
import { ExpressionContext } from "./apexParser";
import { PrimaryContext } from "./apexParser";
import { CreatorContext } from "./apexParser";
import { CreatedNameContext } from "./apexParser";
import { InnerCreatorContext } from "./apexParser";
import { ArrayCreatorRestContext } from "./apexParser";
import { MapCreatorRestContext } from "./apexParser";
import { SetCreatorRestContext } from "./apexParser";
import { ClassCreatorRestContext } from "./apexParser";
import { ExplicitGenericInvocationContext } from "./apexParser";
import { NonWildcardTypeArgumentsContext } from "./apexParser";
import { TypeArgumentsOrDiamondContext } from "./apexParser";
import { NonWildcardTypeArgumentsOrDiamondContext } from "./apexParser";
import { SuperSuffixContext } from "./apexParser";
import { ExplicitGenericInvocationSuffixContext } from "./apexParser";
import { ArgumentsContext } from "./apexParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `apexParser`.
 */
export interface apexListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `apexParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPackageDeclaration?: (ctx: PackageDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.packageDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPackageDeclaration?: (ctx: PackageDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	enterVariableModifier?: (ctx: VariableModifierContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.variableModifier`.
	 * @param ctx the parse tree
	 */
	exitVariableModifier?: (ctx: VariableModifierContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	enterTypeParameters?: (ctx: TypeParametersContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.typeParameters`.
	 * @param ctx the parse tree
	 */
	exitTypeParameters?: (ctx: TypeParametersContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	enterTypeParameter?: (ctx: TypeParameterContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.typeParameter`.
	 * @param ctx the parse tree
	 */
	exitTypeParameter?: (ctx: TypeParameterContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.typeBound`.
	 * @param ctx the parse tree
	 */
	enterTypeBound?: (ctx: TypeBoundContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.typeBound`.
	 * @param ctx the parse tree
	 */
	exitTypeBound?: (ctx: TypeBoundContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	enterEnumConstants?: (ctx: EnumConstantsContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.enumConstants`.
	 * @param ctx the parse tree
	 */
	exitEnumConstants?: (ctx: EnumConstantsContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	enterEnumConstant?: (ctx: EnumConstantContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	exitEnumConstant?: (ctx: EnumConstantContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 */
	enterEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 */
	exitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	enterInterfaceBody?: (ctx: InterfaceBodyContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.interfaceBody`.
	 * @param ctx the parse tree
	 */
	exitInterfaceBody?: (ctx: InterfaceBodyContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.genericMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.genericMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.genericConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGenericConstructorDeclaration?: (ctx: GenericConstructorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.genericConstructorDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGenericConstructorDeclaration?: (ctx: GenericConstructorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.propertyBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterPropertyBodyDeclaration?: (ctx: PropertyBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.propertyBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitPropertyBodyDeclaration?: (ctx: PropertyBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.interfaceBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.interfaceBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.constDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConstDeclaration?: (ctx: ConstDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.constDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConstDeclaration?: (ctx: ConstDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.constantDeclarator`.
	 * @param ctx the parse tree
	 */
	enterConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.constantDeclarator`.
	 * @param ctx the parse tree
	 */
	exitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.genericInterfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterGenericInterfaceMethodDeclaration?: (ctx: GenericInterfaceMethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.genericInterfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitGenericInterfaceMethodDeclaration?: (ctx: GenericInterfaceMethodDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.variableDeclarators`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.variableDeclarator`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclarator?: (ctx: VariableDeclaratorContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	enterVariableInitializer?: (ctx: VariableInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.variableInitializer`.
	 * @param ctx the parse tree
	 */
	exitVariableInitializer?: (ctx: VariableInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterArrayInitializer?: (ctx: ArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.arrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitArrayInitializer?: (ctx: ArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.enumConstantName`.
	 * @param ctx the parse tree
	 */
	enterEnumConstantName?: (ctx: EnumConstantNameContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.enumConstantName`.
	 * @param ctx the parse tree
	 */
	exitEnumConstantName?: (ctx: EnumConstantNameContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.type_`.
	 * @param ctx the parse tree
	 */
	enterType_?: (ctx: Type_Context) => void;
	/**
	 * Exit a parse tree produced by `apexParser.type_`.
	 * @param ctx the parse tree
	 */
	exitType_?: (ctx: Type_Context) => void;

	/**
	 * Enter a parse tree produced by `apexParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	enterClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 */
	exitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	enterTypeArguments?: (ctx: TypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.typeArguments`.
	 * @param ctx the parse tree
	 */
	exitTypeArguments?: (ctx: TypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	enterTypeArgument?: (ctx: TypeArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.typeArgument`.
	 * @param ctx the parse tree
	 */
	exitTypeArgument?: (ctx: TypeArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 */
	enterQualifiedNameList?: (ctx: QualifiedNameListContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 */
	exitQualifiedNameList?: (ctx: QualifiedNameListContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	enterFormalParameters?: (ctx: FormalParametersContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.formalParameters`.
	 * @param ctx the parse tree
	 */
	exitFormalParameters?: (ctx: FormalParametersContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterList?: (ctx: FormalParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.formalParameterList`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterList?: (ctx: FormalParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	enterFormalParameter?: (ctx: FormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.formalParameter`.
	 * @param ctx the parse tree
	 */
	exitFormalParameter?: (ctx: FormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.lastFormalParameter`.
	 * @param ctx the parse tree
	 */
	enterLastFormalParameter?: (ctx: LastFormalParameterContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.lastFormalParameter`.
	 * @param ctx the parse tree
	 */
	exitLastFormalParameter?: (ctx: LastFormalParameterContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.methodBody`.
	 * @param ctx the parse tree
	 */
	enterMethodBody?: (ctx: MethodBodyContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.methodBody`.
	 * @param ctx the parse tree
	 */
	exitMethodBody?: (ctx: MethodBodyContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.constructorBody`.
	 * @param ctx the parse tree
	 */
	enterConstructorBody?: (ctx: ConstructorBodyContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.constructorBody`.
	 * @param ctx the parse tree
	 */
	exitConstructorBody?: (ctx: ConstructorBodyContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.annotationName`.
	 * @param ctx the parse tree
	 */
	enterAnnotationName?: (ctx: AnnotationNameContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.annotationName`.
	 * @param ctx the parse tree
	 */
	exitAnnotationName?: (ctx: AnnotationNameContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	enterElementValuePairs?: (ctx: ElementValuePairsContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.elementValuePairs`.
	 * @param ctx the parse tree
	 */
	exitElementValuePairs?: (ctx: ElementValuePairsContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	enterElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	exitElementValuePair?: (ctx: ElementValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.elementValue`.
	 * @param ctx the parse tree
	 */
	enterElementValue?: (ctx: ElementValueContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.elementValue`.
	 * @param ctx the parse tree
	 */
	exitElementValue?: (ctx: ElementValueContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	enterElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 */
	exitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.annotationTypeElementRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.annotationTypeElementRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.annotationMethodOrConstantRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.annotationMethodOrConstantRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.annotationMethodRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.annotationMethodRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.annotationConstantRest`.
	 * @param ctx the parse tree
	 */
	enterAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.annotationConstantRest`.
	 * @param ctx the parse tree
	 */
	exitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultValue?: (ctx: DefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.propertyBlock`.
	 * @param ctx the parse tree
	 */
	enterPropertyBlock?: (ctx: PropertyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.propertyBlock`.
	 * @param ctx the parse tree
	 */
	exitPropertyBlock?: (ctx: PropertyBlockContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.getter`.
	 * @param ctx the parse tree
	 */
	enterGetter?: (ctx: GetterContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.getter`.
	 * @param ctx the parse tree
	 */
	exitGetter?: (ctx: GetterContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.setter`.
	 * @param ctx the parse tree
	 */
	enterSetter?: (ctx: SetterContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.setter`.
	 * @param ctx the parse tree
	 */
	exitSetter?: (ctx: SetterContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.catchClause`.
	 * @param ctx the parse tree
	 */
	enterCatchClause?: (ctx: CatchClauseContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.catchClause`.
	 * @param ctx the parse tree
	 */
	exitCatchClause?: (ctx: CatchClauseContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.catchType`.
	 * @param ctx the parse tree
	 */
	enterCatchType?: (ctx: CatchTypeContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.catchType`.
	 * @param ctx the parse tree
	 */
	exitCatchType?: (ctx: CatchTypeContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	enterFinallyBlock?: (ctx: FinallyBlockContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.finallyBlock`.
	 * @param ctx the parse tree
	 */
	exitFinallyBlock?: (ctx: FinallyBlockContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.resourceSpecification`.
	 * @param ctx the parse tree
	 */
	enterResourceSpecification?: (ctx: ResourceSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.resourceSpecification`.
	 * @param ctx the parse tree
	 */
	exitResourceSpecification?: (ctx: ResourceSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.resources`.
	 * @param ctx the parse tree
	 */
	enterResources?: (ctx: ResourcesContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.resources`.
	 * @param ctx the parse tree
	 */
	exitResources?: (ctx: ResourcesContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.forControl`.
	 * @param ctx the parse tree
	 */
	enterForControl?: (ctx: ForControlContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.forControl`.
	 * @param ctx the parse tree
	 */
	exitForControl?: (ctx: ForControlContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.forInit`.
	 * @param ctx the parse tree
	 */
	enterForInit?: (ctx: ForInitContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.forInit`.
	 * @param ctx the parse tree
	 */
	exitForInit?: (ctx: ForInitContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	enterEnhancedForControl?: (ctx: EnhancedForControlContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.enhancedForControl`.
	 * @param ctx the parse tree
	 */
	exitEnhancedForControl?: (ctx: EnhancedForControlContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	enterForUpdate?: (ctx: ForUpdateContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.forUpdate`.
	 * @param ctx the parse tree
	 */
	exitForUpdate?: (ctx: ForUpdateContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.parExpression`.
	 * @param ctx the parse tree
	 */
	enterParExpression?: (ctx: ParExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.parExpression`.
	 * @param ctx the parse tree
	 */
	exitParExpression?: (ctx: ParExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	enterStatementExpression?: (ctx: StatementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.statementExpression`.
	 * @param ctx the parse tree
	 */
	exitStatementExpression?: (ctx: StatementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	enterConstantExpression?: (ctx: ConstantExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.constantExpression`.
	 * @param ctx the parse tree
	 */
	exitConstantExpression?: (ctx: ConstantExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.apexDbUpsertExpression`.
	 * @param ctx the parse tree
	 */
	enterApexDbUpsertExpression?: (ctx: ApexDbUpsertExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.apexDbUpsertExpression`.
	 * @param ctx the parse tree
	 */
	exitApexDbUpsertExpression?: (ctx: ApexDbUpsertExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.apexDbExpression`.
	 * @param ctx the parse tree
	 */
	enterApexDbExpression?: (ctx: ApexDbExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.apexDbExpression`.
	 * @param ctx the parse tree
	 */
	exitApexDbExpression?: (ctx: ApexDbExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.creator`.
	 * @param ctx the parse tree
	 */
	enterCreator?: (ctx: CreatorContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.creator`.
	 * @param ctx the parse tree
	 */
	exitCreator?: (ctx: CreatorContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.createdName`.
	 * @param ctx the parse tree
	 */
	enterCreatedName?: (ctx: CreatedNameContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.createdName`.
	 * @param ctx the parse tree
	 */
	exitCreatedName?: (ctx: CreatedNameContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.innerCreator`.
	 * @param ctx the parse tree
	 */
	enterInnerCreator?: (ctx: InnerCreatorContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.innerCreator`.
	 * @param ctx the parse tree
	 */
	exitInnerCreator?: (ctx: InnerCreatorContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.mapCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterMapCreatorRest?: (ctx: MapCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.mapCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitMapCreatorRest?: (ctx: MapCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.setCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterSetCreatorRest?: (ctx: SetCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.setCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitSetCreatorRest?: (ctx: SetCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.classCreatorRest`.
	 * @param ctx the parse tree
	 */
	enterClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.classCreatorRest`.
	 * @param ctx the parse tree
	 */
	exitClassCreatorRest?: (ctx: ClassCreatorRestContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.explicitGenericInvocation`.
	 * @param ctx the parse tree
	 */
	enterExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.explicitGenericInvocation`.
	 * @param ctx the parse tree
	 */
	exitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	enterNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 */
	exitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	enterTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	exitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.nonWildcardTypeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	enterNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.nonWildcardTypeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 */
	exitNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.superSuffix`.
	 * @param ctx the parse tree
	 */
	enterSuperSuffix?: (ctx: SuperSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.superSuffix`.
	 * @param ctx the parse tree
	 */
	exitSuperSuffix?: (ctx: SuperSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.explicitGenericInvocationSuffix`.
	 * @param ctx the parse tree
	 */
	enterExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.explicitGenericInvocationSuffix`.
	 * @param ctx the parse tree
	 */
	exitExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `apexParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `apexParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;
}

