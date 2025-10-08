// Generated from src/grammar/apex.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `apexParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface apexVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `apexParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.classOrInterfaceModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.variableModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifier?: (ctx: VariableModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.typeBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBound?: (ctx: TypeBoundContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.enumConstants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstants?: (ctx: EnumConstantsContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.interfaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.genericMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.genericConstructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericConstructorDeclaration?: (ctx: GenericConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.propertyBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyBodyDeclaration?: (ctx: PropertyBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.interfaceBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.constDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDeclaration?: (ctx: ConstDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.constantDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.genericInterfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericInterfaceMethodDeclaration?: (ctx: GenericInterfaceMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.variableDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.enumConstantName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstantName?: (ctx: EnumConstantNameContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.type_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_?: (ctx: Type_Context) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.qualifiedNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.lastFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLastFormalParameter?: (ctx: LastFormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.constructorBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorBody?: (ctx: ConstructorBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.annotationName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationName?: (ctx: AnnotationNameContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.elementValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.annotationTypeBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.annotationTypeElementRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.annotationMethodOrConstantRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.annotationMethodRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.annotationConstantRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.propertyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyBlock?: (ctx: PropertyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.getter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetter?: (ctx: GetterContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.setter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetter?: (ctx: SetterContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.catchType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchType?: (ctx: CatchTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.resourceSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceSpecification?: (ctx: ResourceSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.resources`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResources?: (ctx: ResourcesContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.forControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForControl?: (ctx: ForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.enhancedForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpression?: (ctx: StatementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.constantExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.apexDbUpsertExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApexDbUpsertExpression?: (ctx: ApexDbUpsertExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.apexDbExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApexDbExpression?: (ctx: ApexDbExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.creator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreator?: (ctx: CreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.createdName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatedName?: (ctx: CreatedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.innerCreator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInnerCreator?: (ctx: InnerCreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.mapCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapCreatorRest?: (ctx: MapCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.setCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetCreatorRest?: (ctx: SetCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.classCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassCreatorRest?: (ctx: ClassCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.explicitGenericInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.nonWildcardTypeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.nonWildcardTypeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.superSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperSuffix?: (ctx: SuperSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.explicitGenericInvocationSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `apexParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;
}

